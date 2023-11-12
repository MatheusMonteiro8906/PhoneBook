export default {
    async getAllUsers() {
        try {

            const response = await fetch('http://localhost:8080/users',
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
            const response = await fetch(`http://localhost:8080/users/${id}/phone_numbers`,
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