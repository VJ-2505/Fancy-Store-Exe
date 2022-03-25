// const electronInstaller = require('electron-winstaller');
const path = require('path')
const moment = require('moment')
// async function genexe() {
//     try {
//         await electronInstaller.createWindowsInstaller({
//             appDirectory: 'C:/Work/Biz1POSDesktop/biz1book-win32-ia32',
//             outputDirectory: 'C:/Work/exe/Installers',
//             authors: 'Biz1Book Inc.',
//             exe: 'biz1book.exe',
//             description: 'POS Billing Software',
//             iconUrl: path.join(__dirname, './App Icon.ico'),
//         });
//         console.log('It worked!');
//     } catch (e) {
//         console.log(`No dice: ${e.message}`);
//     }
// }

const installer = require('electron-installer-windows')

const options = {
    src: 'D:/master-sp-new/Biz1Maket_Single_Store/Biz1Pos-win32-ia32/Biz1Pos.exe',
    dest: 'D:/master-sp-new/Biz1Maket_Single_Store/Installers',
    icon: path.join(__dirname, './favicon.ico'),
    authors: ['Biz1Book Inc.'],
    exe: 'Biz1POS-BizDom.exe',
    description: 'POS Billing Software'
}

async function main(options) {
    var startstamp = new Date().getTime();
    console.log('Creating package (this may take a while)')
    console.log(`started @ ${moment().format('lll')}`)
    try {
        await installer(options)
        console.log(`Successfully created package at ${options.dest}`)
        console.log(`completed @ ${moment().format('lll')}`)
        console.log(`timetook ${(new Date().getTime() - startstamp)/(60000)} mins`)
    } catch (err) {
        console.error(err, err.stack)
        process.exit(1)
    }
}
main(options)