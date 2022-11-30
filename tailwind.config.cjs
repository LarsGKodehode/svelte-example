/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			backgroundImage: {
        'site-background':
          "linear-gradient(90deg, rgba(2,0,36,0.5) 0%, rgba(9,9,121,0.1) 20%, rgba(9,9,121,0.1) 80%, rgba(2,0,36,0.5) 100%), url('https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80')",
      },
		}
	},
	plugins: []
};
