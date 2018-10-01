class GraphqlController < ApplicationController
  skip_before_action :verify_authenticity_token


  def execute
    sleep 1.5
    variables = ensure_hash(params[:variables])
    query = params[:query]
    operation_name = params[:operationName]
    context = {
      session: session,
      current_user: current_user
    }
    result = NReactBackSchema.execute(query, variables: variables, context: context, operation_name: operation_name)
    render json: result
  rescue => e
    raise e unless Rails.env.development?
    handle_error_in_development e
  end

  private

  # gets current user from token stored in session
  def current_user
    # if we want to change the sign-in strategy, this is the place todo it
    return unless session[:token]

    # For Ruby on Rails >=5.2.x use:
    #crypt = ActiveSupport::MessageEncryptor.new("iliketomoveitiliketomoveitiliketomoveitiliketomoveitiliketomoveitiliketomoveitiliketomoveit".byteslice(0..31))
    #token = crypt.decrypt_and_verify session[:token]
    #user_id = token.gsub('user-id:', '').to_i
    User.find session[:token]
  rescue ActiveSupport::MessageVerifier::InvalidSignature
    nil
  end

  # Handle form data, JSON body, or a blank value
  def ensure_hash(ambiguous_param)
    case ambiguous_param
    when String
      if ambiguous_param.present?
        ensure_hash(JSON.parse(ambiguous_param))
      else
        {}
      end
    when Hash, ActionController::Parameters
      ambiguous_param
    when nil
      {}
    else
      raise ArgumentError, "Unexpected parameter: #{ambiguous_param}"
    end
  end

  def handle_error_in_development(e)
    logger.error e.message
    logger.error e.backtrace.join("\n")

    render json: { error: { message: e.message, backtrace: e.backtrace }, data: {} }, status: 500
  end
end
