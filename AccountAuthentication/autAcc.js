const auth = {
    users: [], // This array will store user data
    
    // Method to register a new user
    register: function(username, password) {
        // Check if the user already exists
        if (this.users.some(user => user.username === username)) {
            return 'User already exists';
        }
        // Add new user to the users array
        this.users.push({ username, password });
        return 'User registered successfully';
    },

    // Method to log in a user
    login: function(username, password) {
        // Find the user with the matching username
        const user = this.users.find(user => user.username === username);
        if (!user) {
            return 'Username does not exist';
        }
        // Check if the provided password matches the stored password
        if (user.password === password) {
            return 'Login successful';
        } else {
            return 'Incorrect password';
        }
    },

    // Method to log out a user
    logout: function() {
        // In a real application, this might involve clearing session data or tokens
        return 'User logged out';
    }
};

// Example usage:
console.log(auth.register('macarthur', 'password123')); // User registered successfully
console.log(auth.login('macarthur', 'password123'));    // Login successful
console.log(auth.logout());                          // User logged out
console.log(auth.login('macarthur', 'wrongpassword'));  // Incorrect password
console.log(auth.login('kapitan', 'password123'));  // Username does not exist
