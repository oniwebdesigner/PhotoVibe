// users/SendData.ts
interface SignUpResponse {
  message: string;
  success: boolean;
}

const sendData = async (formData: { name: string; email: string; password: string }) => {
  try {
    const response = await fetch('https://backend-api-url/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    // Check if the response was successful
    if (!response.ok) {
      throw new Error('Error while sending data.');
    }

    // Specify the type of data expected from the JSON response
    const data: SignUpResponse = await response.json();
    console.log('Response from backend:', data.message);

    return data;  // Return the response if needed for frontend use

  } catch (error) {
    // Handle the error type to avoid "unknown" type errors
    if (error instanceof Error) {
      console.error('Error:', error.message);
    } else {
      console.error('Unknown error occurred');
    }
  }
};

export default sendData;
