import fs from 'fs';
let content = fs.readFileSync('src/App.tsx', 'utf-8');
content = content.replace(/font-display font-bold/g, 'font-display font-normal');
content = content.replace(/font-bold text-poboy-black font-display/g, 'font-normal text-poboy-black font-display');
content = content.replace(/<div className="absolute -inset-4 bg-poboy-red rounded-3xl transform rotate-3 opacity-20"><\/div>\n\s*<div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">/g, '<div className="relative overflow-hidden shadow-2xl border-l-8 border-poboy-yellow">');
fs.writeFileSync('src/App.tsx', content);
console.log('Replaced successfully');
