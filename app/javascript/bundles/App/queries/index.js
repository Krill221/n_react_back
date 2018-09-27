import gql from "graphql-tag";

export const GET_TASKS = gql`{
    tasks {
      id
      name
      body
      uuid
    }
}`;

/*
export const GET_TASKS = gql`{
    tasksByUser {
      id
      name
      body
      uuid
    }
}`;

*/


export const GET_TASK = gql`
  query Task($id: ID!) {
    task(id: $id) {
      id
      name
      body
      uuid
    }
  }`;

  export const UPDATE_TASK = gql`
    mutation UpdateTask($id: ID!, $name: String!, $body: String!) {
      updateTask(input: {id: $id, name: $name, body: $body}){
        task {
          id
          name
          body
        }
      }
  }`;

  export const ADD_TASK = gql`
    mutation addTask($name: String!, $body: String!) {
      addTask(input: {name: $name, body: $body}){
        task {
          id
          name
          body
          uuid
        }
      }
    }
  `;


  export const GET_MESSAGES = gql`
    query Messages($taskid: ID!)  {
      messages(taskid: $taskid) {
        id
        text
      }
  }`;

  export const ADD_MESSAGE = gql`
    mutation addMessage($taskid: ID!, $text: String!) {
      addMessage(input: {taskid: $taskid, text: $text}){
          id
          text
          taskId
      }
    }
  `;
