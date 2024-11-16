export default {
    rootDir: 'src', // Map die je wilt serveren
    watch: true, // Watch-mode inschakelen
    open: true, // Browser automatisch openen
    appIndex: '/index.html', // Startpagina
    nodeResolve: {
        exportConditions: ['development'],
    },
  };