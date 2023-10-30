const blueBoy = {
    name: 'Chanapol',
    score: 12,
  };
  

  const blueGirl = blueBoy;
  blueGirl.name = 'Lopanahc';
  blueGirl.score = 10;
  const badGirl = {
    name: 'Chanapol',
    score: 12,
  };
  console.log(blueBoy);
  console.log(blueGirl === blueBoy)
  //Output:true

  console.log(blueGirl == badGirl) // ถึงจะมีค่า property ทุกอย่างเหมือนกันเเต่ว่าใช้ Reference ต่างกัน
  // Output:false