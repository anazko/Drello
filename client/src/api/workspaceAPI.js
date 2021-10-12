import { $authHost } from ".";

export const workspaceAPI = {

  getAllWorkspaces: async (userId) => {
    try {
      const {data} = await $authHost.get('/api/workspace')
      // console.log(data)
      return data
    }
    catch (e) {
      console.log(e);
    }
  }

  

}