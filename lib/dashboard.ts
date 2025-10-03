export const getProfileData = async (token: string) => {
    // Placeholder for fetching profile data from backend
    /**
     * localhost:8000/game/getUserProfile
     */
    try{
        const resp = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/game/getUserProfile`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }
        })

        if(!resp.ok){
          throw new Error("Failed to fetch profile data");
        }

        const data = await resp.json();
        return data;

    }catch(err){
      console.error("Error fetching profile data:", err);
      return null;
    }

}