
const getAllUsers = async (pageNumber: number) => {
    try {
        const response = await fetch(`${process.env.API_URL}users?page=${+pageNumber}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'api-key': `${process.env.API_KEY}`
                }
            });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error('Error fetching users:', error);
    }
}

const getOneUser = async (id: number) => {
    try {
        const response = await fetch(`${process.env.API_URL}users/${id}/phone_numbers`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'api-key': `${process.env.API_KEY}`
                }
            });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error('Error fetching users:', error);
    }
}

export { getAllUsers, getOneUser }