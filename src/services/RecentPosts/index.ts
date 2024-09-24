import envConfig from "@/src/config/envConfig"
import { delay } from "@/src/utils/delay";

export const getRecentPosts = async () => {
    try {
      const res = await fetch(`${envConfig.baseApi}/items?sortBy=-createdAt&limit=9`);
  
      await delay(5000)
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
  
      return await res.json();
    } catch (error) {
      console.error('Error fetching recent posts:', error);
      return { error: 'Unable to fetch recent posts. Please try again later.' };
    }
  };
  