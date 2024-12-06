import css from 'rollup-plugin-css-porter';

export default {
	input: 'src/app.js',
  	plugins: [ css({
   	raw: 'oswc.css',
    	minified: 'oswc.min.css',
  	}) ],
  	output: [
		{
			file: './build/app.js',
			format: 'es'
		},
	],
};