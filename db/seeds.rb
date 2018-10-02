# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
u = User.create(name: "22", email: "22", password: "22")
t = Task.create!(name: 'task1', body: 'body', uuid: ('task' + SecureRandom.hex(6)) )
unless t.users.exists? u.id
t.users << u
end
Message.create!(text: "hello", contenttype: "txt", task_id: 1,
   time: Time.now.strftime("%H:%M"), user_id: 1 )
