import Fetch from 'isomorphic-unfetch';

export const fetch = async(url: string, postData: any = undefined) => {
  const apiResponse = await Fetch(url, postData)
    .then((response: any) => response.json())
    .catch((error)=>{
      throw error;
      // TODO @Mayank: What to do when error occur
    });
  return apiResponse;
};
