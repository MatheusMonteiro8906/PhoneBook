
export default {
    async getAllUsers() {
        try {
            const response = await fetch(`${process.env.API_URL}users`,
                {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json', }
                });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            return data;

        } catch (error) {
            console.error('Error fetching users:', error);
        }
    },

    async getOneUser(id: number) {
        try {
            const response = await fetch(`${process.env.API_URL}users/${id}/phone_numbers`,
                {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json', }
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
}