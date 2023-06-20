const RegisterUser = async (username, password) => {
    try {
      const response = await fetch(`${BASE_URL}/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            username: username,
            password: password,
          },
        }),
      });
  
      const result = await response.json();
    
      return result.data;
    } catch (error) {
      console.log(error);
    }
  };

  export default RegisterUser