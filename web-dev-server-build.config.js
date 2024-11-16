export default {
    rootDir: 'output', // Map die je wilt serveren
    watch: false, // Watch-mode inschakelen
    open: true, // Browser automatisch openen
    appIndex: '/index.html', // Startpagina
    nodeResolve: {
      exportConditions: ['production'],
    },  
};