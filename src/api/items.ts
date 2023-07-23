// api.ts
export async function fetchData(url: string): Promise<any> {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Response status is not 200.');
      }
      const data = await response.json();
      return data;
    } catch (error:any) {
      throw new Error('Error in fetching data: ' + error?.message);
    }
  }
  