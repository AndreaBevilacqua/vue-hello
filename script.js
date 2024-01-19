console.log('Vue ok', Vue);

const { createApp } = Vue;
const app = createApp({
    data() {
        return {
            message: 'Finalmente si studia Vue'
        }
    }
});
app.mount('#root');
