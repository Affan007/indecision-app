const regularArrowFunction=(name) => {
  const firstName = name.split(' ')[0];
  return firstName
}

console.log('firstname regular: ',regularArrowFunction('mike henagen'));

const shortArrow =(name)=> name.split(' ')[0];

console.log(shortArrow('piyo mika'));
