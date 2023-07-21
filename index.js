 // Get the HTML element with the class name "img_name"
  var imageElement = document.querySelector('.fit');
  // for dot
  const dot = ['1', '1', '1','1', '1', '1','1', '1', '1','1', '1', '1','1', '1', '1'];
  const d = ['1', '1', '1','1', '1', '1','1', '1', '1','1', '1', '1','1', '1', '1'];
  dot[1] = document.querySelector('.dot1');
  dot[2] = document.querySelector('.dot2');
  dot[3] = document.querySelector('.dot3');
  dot[4] = document.querySelector('.dot4');
  dot[5] = document.querySelector('.dot5');
  dot[6] = document.querySelector('.dot6');
  dot[7] = document.querySelector('.dot7');
  dot[8] = document.querySelector('.dot8');
  dot[9] = document.querySelector('.dot9');
  dot[10] = document.querySelector('.dot10');
  dot[11] = document.querySelector('.dot11');
  dot[12] = document.querySelector('.dot12');
  dot[13] = document.querySelector('.dot13');
  dot[14] = document.querySelector('.dot14');
  
  d[1] = document.querySelector('.d1');
  d[2] = document.querySelector('.d2');
  d[3] = document.querySelector('.d3');
  d[4] = document.querySelector('.d4');
  d[5] = document.querySelector('.d5');
  d[6] = document.querySelector('.d6');
  d[7] = document.querySelector('.d7');
  d[8] = document.querySelector('.d8');
  d[9] = document.querySelector('.d9');
  d[10] = document.querySelector('.d10');
  d[11] = document.querySelector('.d11');
  d[12] = document.querySelector('.d12');
  d[13] = document.querySelector('.d13');
  d[14] = document.querySelector('.d14');
  // for box
  const box = ['1', '1', '1','1', '1', '1','1', '1', '1','1', '1', '1','1', '1', '1', '1', '1', '1','1', '1', '1'];
  box[1] = document.querySelector('.box-postion1');
  box[2] = document.querySelector('.box-postion2');
  box[3] = document.querySelector('.box-postion3');
  box[4] = document.querySelector('.box-postion4');
  box[5] = document.querySelector('.box-postion5');
  box[6] = document.querySelector('.box-postion6');
  box[7] = document.querySelector('.box-postion7');
  box[8] = document.querySelector('.box-postion8');
  box[9] = document.querySelector('.box-postion9');
  box[10] = document.querySelector('.box-postion10');
  box[11] = document.querySelector('.box-postion11');
  box[12] = document.querySelector('.box-postion12');
  box[13] = document.querySelector('.box-postion13');
  box[14] = document.querySelector('.box-postion14');
  box[15] = document.querySelector('.box-postion15');
  box[16] = document.querySelector('.box-postion16');
  box[17] = document.querySelector('.box-postion17');
  box[18] = document.querySelector('.box-postion18');
  box[19] = document.querySelector('.box-postion19');
  box[20] = document.querySelector('.box-postion20');
  
  // for the lines
  const line = ['1', '1', '1','1', '1', '1','1', '1', '1','1', '1', '1','1', '1', '1', '1', '1', '1','1', '1', '1','1', '1', '1','1', '1', '1','1', '1', '1','1', '1', '1','1', '1', '1', '1', '1', '1','1', '1', '1', '1', '1'] ;
  line[1] = document.querySelector('.line1a');
  line[21] = document.querySelector('.line1b');
  line[2] = document.querySelector('.line2a');
  line[22] = document.querySelector('.line2b');
  line[3] = document.querySelector('.line3a');
  line[23] = document.querySelector('.line3b');
  line[4] = document.querySelector('.line4a');
  line[24] = document.querySelector('.line4b');
  line[5] = document.querySelector('.line5a');
  line[25] = document.querySelector('.line5b');
  line[6] = document.querySelector('.line6a');
  line[26] = document.querySelector('.line6b');
  line[7] = document.querySelector('.line7a');
  line[27] = document.querySelector('.line7b');
  line[8] = document.querySelector('.line8a');
  line[28] = document.querySelector('.line8b');
  line[9] = document.querySelector('.line9a');
  line[29] = document.querySelector('.line9b');
  line[10] = document.querySelector('.line10a');
  line[30] = document.querySelector('.line10b');
  line[11] = document.querySelector('.line11a');
  line[31] = document.querySelector('.line11b');
  line[12] = document.querySelector('.line12a');
  line[32] = document.querySelector('.line12b');
  line[13] = document.querySelector('.line13a');
  line[33] = document.querySelector('.line13b');
  line[14] = document.querySelector('.line14a');
  line[34] = document.querySelector('.line14b');
  line[15] = document.querySelector('.line15a');
  line[35] = document.querySelector('.line15b');
  line[16] = document.querySelector('.line16a');
  line[36] = document.querySelector('.line16b');
  line[17] = document.querySelector('.line17a');
  line[37] = document.querySelector('.line17b');
  line[18] = document.querySelector('.line18a');
  line[38] = document.querySelector('.line18b');
  line[19] = document.querySelector('.line19a');
  line[39] = document.querySelector('.line19b');
  line[20] = document.querySelector('.line20a');
  line[40] = document.querySelector('.line20b');
  
  const patient_data = new Array(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
  const box_to_dot_map = new Array(1, 2, 3, 4, 3, 4, 5, 6, 7, 8, 7, 8, 7, 8, 9, 10, 11, 12, 13, 14);
  
  function dot_implement(injured)
  {
      if(injured == 'Empty' || injured == '')
      {
          for(let i =1; i<=14;i++)
          {
              dot[i].style.background ='#DBF5D6';
              d[i].style.background ='#92E184'
              // var d1 = document.querySelector('.p2d'+i);
              // d1.style.background ='#DBF5D6';
              // var d2 = document.querySelector('.d'+i);
              // d2.style.background ='#92E184';
          }
      }
      else if(injured == 'Bi-Lateral')
      {
          for(let i =1; i<=14;i++)
          {
              // var d1 = document.querySelector('.p2d'+i);
              // d1.style.background ='#F7B9B5';
              dot[i].style.background ='#F7B9B5';
              d[i].style.background ='#CC2016';
          }
      }
      else if(injured == 'Right')
      {
          for(let i =1; i<=14;i+=2)
          {
              dot[i].style.background ='#F7B9B5';
              d[i].style.background ='#CC2016';
              dot[i+1].style.background ='#DBF5D6';
              d[i+1].style.background ='#92E184';
  
              // var d1 = document.querySelector('.p2d'+i);
              // d1.style.background ='#F7B9B5';
          }
      }
      else if(injured = 'Left'){
          for(let i =1; i<=14;i+=2)
          {
              dot[i+1].style.background ='#F7B9B5';
              d[i+1].style.background ='#CC2016';
              dot[i].style.background ='#DBF5D6';
              d[i].style.background ='#92E184';
          }
      }
  }

  function dot_implement2(injured)
  {
      if(injured == 'Empty')
      {
          for(let i =1; i<=14;i++)
          {
              dot[i].style.background ='#DBF5D6';
              d[i].style.background ='#92E184'
              // var d1 = document.querySelector('.p2d'+i);
              // d1.style.background ='#DBF5D6';
              // var d2 = document.querySelector('.d'+i);
              // d2.style.background ='#92E184';
          }
      }
      else if(injured == 'Bi-Lateral')
      {
          for(let i =1; i<=14;i++)
          {
              // var d1 = document.querySelector('.p2d'+i);
              // d1.style.background ='#F7B9B5';
              dot[i].style.background ='#F7B9B5';
              d[i].style.background ='#CC2016';
          }
      }
      else if(injured == 'Right')
      {
          for(let i =1; i<=14;i+=2)
          {
              dot[i].style.background ='#F7B9B5';
              d[i].style.background ='#CC2016';
              dot[i+1].style.background ='#DBF5D6';
              d[i+1].style.background ='#92E184';
  
              // var d1 = document.querySelector('.p2d'+i);
              // d1.style.background ='#F7B9B5';
          }
      }
      else if(injured = 'Left'){
          for(let i =1; i<=14;i+=2)
          {
              dot[i+1].style.background ='#F7B9B5';
              d[i+1].style.background ='#CC2016';
              dot[i].style.background ='#DBF5D6';
              d[i].style.background ='#92E184';
          }
      }
  }
  var secondPageImage;
  var ws2;
  var hs2;
  function changeImage(gender, patient_data, injured)
  {
      dot_implement(injured);

      var sh = document.querySelector('.fit');
     
      for(var i =0; i<20;i++)
      {
          if(patient_data[i]!=-1)
          {
              // dot[box_to_dot_map[i]].style.visibility = 'visible';
              // box[i+1].style.visibility ='visible';
          }
      }
      if(gender == 'female')
      {
        sh.style.width = '97.7364pt';
        sh.style.height = '283.56pt';
        ws2 = '97.7364pt';
        hs2 = '283.56pt';
  
          if(injured == 'Bi-Lateral')
          {
              imageElement.src = '/icons/images/Female Bilateral body part.png';
              secondPageImage = '/icons/images/Female Bilateral body part.png';
          }
          else if(injured == 'Left')
          {
              imageElement.src = '/icons/images/Female Left Side affected body part.png';
              secondPageImage ='/icons/images/Female Left Side affected body part.png';
          }
          else if(injured == 'Right')
          {
              imageElement.src = '/icons/images/Female Right Side affected body part.png';
              secondPageImage ='/icons/images/Female Right Side affected body part.png';
          }
          else
          {
              imageElement.src = '/icons/images/Female Empty body part.png';
              secondPageImage ='/icons/images/Female Empty body part.png';
          }
        //  arr5 
        dot[1].style.top= '158.941pt';
          dot[1].style.left= '267.8235pt';
          dot[2].style.top= '158.941pt';
          dot[2].style.left= '295.70pt';
          dot[3].style.top= '204.70588pt';
          dot[3].style.left= '254.588pt';
          dot[4].style.top= '204.70588pt';
          dot[4].style.left= '309.2588pt';
          dot[5].style.top= '230.823pt';
          dot[5].style.left= '248.0588pt';
          dot[6].style.top= '230.823pt';
          dot[6].style.left= '317.0645pt';
          dot[7].style.top= '210.3529pt';
          dot[7].style.left= '274.47pt';
          dot[8].style.top= '210.3529pt';
          dot[8].style.left= '290.694pt';
          dot[9].style.top= '239.47pt';
          dot[9].style.left= '268.0588pt';
          dot[10].style.top= '239.47pt';
          dot[10].style.left= '296.10pt';
          dot[11].style.top= '310.47pt';
          dot[11].style.left= '272.3pt';
          dot[12].style.top= '310.47pt';
          dot[12].style.left= '291.329pt';
          dot[13].style.top= '363.88pt';
          dot[13].style.left= '275.88235pt';
          dot[14].style.top= '363.88pt';
          dot[14].style.left= '290.28pt';
          // imageElement.style.bottom = '210px'
          // box[1].style.right = '260px';
          // box[1].style.bottom = '540px';
          // line[1].style.visibility = 'visible';
          // line[21].style.visibility='visible';
          // line[1].style.top = '100px';
          // line[1].style.left = '100px';
          // line[21].style.top = '-125px';
          // line[21].style.left = '104px';
          // line[21].style.width = '170px';
          // line[21].style.transform = 'rotate(67deg)';
  
          // line[2].style.visibility = 'visible';
          // line[22].style.visibility='visible';
          // line[2].style.top = '100px';
          // line[2].style.left = '380px';
          // line[2].style.width = '70px';
          // line[22].style.top = '-134px';
          // line[22].style.left = '256px';
          // line[22].style.width = '180px';
          // line[22].style.transform = 'rotate(-67deg)';
  
          // line[3].style.visibility = 'visible';
          // line[23].style.visibility='visible';
          // line[3].style.top = '-70px';
          // line[3].style.left = '95px';
          // line[3].style.width = '30px';
          // line[23].style.top = '-9px';
          // line[23].style.left = '84px';
          // line[23].style.width = '140px';
          // line[23].style.transform = 'rotate(65deg)';
          
          // line[4].style.visibility = 'visible';
          // line[24].style.visibility='visible';
          // line[4].style.top = '-80px';
          // line[4].style.left = '380px';
          // line[4].style.width = '70px';
          // line[24].style.top = '-22px';
          // line[24].style.left = '292px';
          // line[24].style.width = '130px';
          // line[24].style.transform = 'rotate(-70deg)';
  
          // line[5].style.visibility = 'visible';
          // line[25].style.visibility='visible';
          // line[5].style.top = '-10px';
          // line[5].style.left = '100px';
          // line[5].style.width = '50px';
          // line[25].style.top = '18px';
          // line[25].style.left = '132px';
          // line[25].style.width = '70px';
          // line[25].style.transform = 'rotate(60deg)';
  
          // line[6].style.visibility = 'visible';
          // line[26].style.visibility='visible';
          // line[6].style.top = '-16px';
          // line[6].style.left = '380px';
          // line[6].style.width = '70px';
          // line[26].style.top = '8px';
          // line[26].style.left = '323px';
          // line[26].style.width = '70px';
          // line[26].style.transform = 'rotate(-50deg)';
  
          // line[7].style.visibility = 'visible';
          // line[27].style.visibility='visible';
          // line[7].style.top = '50px';
          // line[7].style.left = '100px';
          // line[7].style.width = '60px';
          // line[27].style.top = '70px';
          // line[27].style.left = '142px';
          // line[27].style.width = '50px';
          // line[27].style.transform = 'rotate(70deg)';
  
          // line[8].style.visibility = 'visible';
          // line[28].style.visibility='visible';
          // line[8].style.top = '45px';
          // line[8].style.left = '375px';
          // line[8].style.width = '80px';
          // line[28].style.top = '64px';
          // line[28].style.left = '336px';
          // line[28].style.width = '50px';
          // line[28].style.transform = 'rotate(-55deg)';
  
          // line[9].style.visibility = 'visible';
          // line[29].style.visibility='visible';
          // line[9].style.top = '135px';
          // line[9].style.left = '100px';
          // line[9].style.width = '105px';
          // line[29].style.top = '105px';
          // line[29].style.left = '188px';
          // line[29].style.width = '61px';
          // line[29].style.transform = 'rotate(-65deg)';
  
          // line[10].style.visibility = 'visible';
          // line[30].style.visibility='visible';
          // line[10].style.top = '130px';
          // line[10].style.left = '315px';
          // line[10].style.width = '140px';
          // line[30].style.top = '100px';
          // line[30].style.left = '272px';
          // line[30].style.width = '61px';
          // line[30].style.transform = 'rotate(65deg)';
  
          // line[11].style.visibility = 'visible';
          // line[31].style.visibility='visible';
          // line[11].style.top = '-135px';
          // line[11].style.left = '100px';
          // line[11].style.width = '105px';
          // line[31].style.top = '105px';
          // line[31].style.left = '188px';
          // line[31].style.width = '61px';
          // line[31].style.transform = 'rotate(-65deg)';
  
  
      }
      else 
      {

          sh.style.width = '120.5436pt';
          sh.style.height = '286.2936pt';

          ws2 = '120.5436pt';
        hs2 = '286.2936pt';
          if(injured == 'Bi-Lateral')
          {
              imageElement.src = '/icons/images/Male Bilateral body part.png';
              secondPageImage ='/icons/images/Male Bilateral body part.png';
          }
          else if(injured == 'Left')
          {
              imageElement.src = '/icons/images/Male Left Side affected.png';
              secondPageImage ='/icons/images/Male Left Side affected.png';
          }
          else if(injured == 'Right')
          {
              imageElement.src = '/icons/images/Male Right Side affected.png';
              secondPageImage =   '/icons/images/Male Right Side affected.png';
          }
          else
          {
              imageElement.src = '/icons/images/Male Empty Body part.png';
              secondPageImage ='/icons/images/Male Empty Body part.png';
          }

          // arr5 
          dot[1].style.top= '156.941pt';
          dot[1].style.left= '269.8235pt';
          dot[2].style.top= '156.941pt';
          dot[2].style.left= '318.70pt';
          dot[3].style.top= '206.70588pt';
          dot[3].style.left= '256.588pt';
          dot[4].style.top= '206.70588pt';
          dot[4].style.left= '329.2588pt';
          dot[5].style.top= '238.823pt';
          dot[5].style.left= '250.0588pt';
          dot[6].style.top= '238.823pt';
          dot[6].style.left= '337.7645pt';
          dot[7].style.top= '218.3529pt';
          dot[7].style.left= '283.47pt';
          dot[8].style.top= '218.3529pt';
          dot[8].style.left= '302.694pt';
          dot[9].style.top= '252.47pt';
          dot[9].style.left= '278.0588pt';
          dot[10].style.top= '252.47pt';
          dot[10].style.left= '309.10pt';
          dot[11].style.top= '310.47pt';
          dot[11].style.left= '281.811pt';
          dot[12].style.top= '310.47pt';
          dot[12].style.left= '304.329pt';
          dot[13].style.top= '365.88pt';
          dot[13].style.left= '282.88235pt';
          dot[14].style.top= '365.88pt';
          dot[14].style.left= '300.28pt';
      }
  }
  
  // inner box function1
  var map1 = {};
  var map2 = {};
  var map3 = {};
  for(var i = 1;i<=14;i++)
  {
      var ID = ".box"+i+"a";
      map1[ID]=0;
      map2[ID]=0;
      map3[ID]=0; 
      ID = ".p2box" + i +"a";
      map1[ID]=0;
      map2[ID]=0;
      map3[ID]=0; 
  }
  
  function addtext(ID, data, testing, dir, data1) {
      
      if(testing != 'Isometric')
      {
        map1[ID]++;
        // Create element
        const el = document.createElement('text');
      
        // Add classes to element
        el.classList.add(dir);
      
        var colr = '#44C02F';
        if(data1 <= 33)
        {
            colr = '#CC2016'
        }
        else if(data1 <= 66)
        {
            colr = '#E6A000'
        }
        var Id1 = ID+'i';
        const box2 = document.querySelector(Id1); // Use querySelector instead of getElementByClass
    
        if(map1[ID]>1)
        {
            var el1 = document.createElement('br');
            box2.appendChild(el1);
        }
        el.innerHTML ="<text style = 'padding-bottom:6.141pt;color:" +colr+";font-size:8.16px;'><b style = 'font-size:8.16px;'>" +data +"°</b>" +" "+ testing+ "</text>";
        
        s = '6,82px';
        el.style.padding = '0px 6.823px 6.141pt 0px';
        box2.appendChild(el);

    
        // box.style.border = "solid blue";
        const box1 = document.querySelector(ID);
        box1.style.visibility = 'visible';
        box1.style.border = "solid";
      }
    }
    
  
    
  // function to add image
  
  
  // inner box function2
  function addImage (ID, path, dir)
  {
      const el = document.createElement('img');
      
      el.src = path;
      el.classList.add('icon1rom');
      const box = document.querySelector(ID); // Use querySelector instead of getElementByClass
      // el.style.padding = '0px 10px 0px 10px';
      if(dir == 'right')el.style.margin = '0px 7px 0px 0px';
      else el.style.margin = '0px 6px 0px -1px';
      var colr1= '#DBF5D6';
      var colr2= '1.5px solid #92E184';

  
      if(path == '/icons/icons/ROM Red.png')
      {
          colr1 = '#FDE9E8'
          colr2 = '1.5px solid #F7B9B5'
      }
      else if(path == '/icons/icons/ROM Yellow.png')
      {
        colr1 = '#FFEFCC'
        colr2 = '1.5px solid #FFCF66'
      }

      box.style.backgroundColor = colr1;
      box.style.border = colr2;
      // el.style.height = '13.2pt'
      // el.style.width = '10.78pt'
      
      box.appendChild(el);
      
      if(map1[ID] == 1)
      {
          el.style.top = '0px';
      }
      if(map1[ID] == 2)
      {
          el.style.top= '8.8235px';
      }
      else if(map1[ID] == 3)
      {
          el.style.top= '16.694px';
      }
      else if(map1[ID] == 4)
      {
          el.style.bottom= '-26.88235px';
      }
  
  
  }
  
  
  //   addtext('.box1a', )
    
  
  // inner box 2 implementation
  
  // // inner box function3
  function addlower(ID, dir,  firstImg, firsttext, secondImg, secondtext)
  {
      const box1 = document.querySelector(ID); // Use querySelector instead of getElementByClass
      box1.style.visibility='visible';

      if(dir == 'right')
      {
        const box = document.querySelector(ID); // Use querySelector instead of getElementByClass
        // const box = document.createElement('div');
          if(firstImg != '-1')
          {
              const el = document.createElement('img');
              el.src = firstImg;
              el.classList.add('icon2');
              
              box.appendChild(el);
              
          }
  
          if(firsttext != '-1')
          {
              const el = document.createElement('text');
              el.innerHTML = firsttext;
              // el.classList.add('icon2');
              el.style.padding = '0px 6.823px 0px 6.823px';
              box.appendChild(el);
              // if(firstImg == '-1')box.style.left = '-12px';
              // else box.style.left = '-20px'
              
          }
  
          if(secondImg != '-1')
          {
              const el = document.createElement('img');
              el.src = secondImg;
              el.classList.add('icon2');
              box.appendChild(el);
          }
  
          if(secondtext != '-1')
          {
              const el = document.createElement('text');
              el.innerHTML = secondtext;
              // el.classList.add('icon2');
              el.style.padding = '0px 0px 0px 6.823px';
              box.appendChild(el);
          }
      }
      else
      {
          if(secondtext != '-1')
          {
              const el = document.createElement('text');
              el.innerHTML = secondtext;
              // el.classList.add('icon2');
              const box = document.querySelector(ID); // Use querySelector instead of getElementByClass
              el.style.padding = '0px 6.823px 0px 0px';
              box.appendChild(el);
          }
  
          if(secondImg != '-1')
          {
              const el = document.createElement('img');
              el.src = secondImg;
              el.classList.add('icon2');
              const box = document.querySelector(ID); // Use querySelector instead of getElementByClass
              box.appendChild(el);
          }
  
          if(firsttext != '-1')
          {
              const el = document.createElement('text');
              el.innerHTML = firsttext;
              // el.classList.add('icon2');
              const box = document.querySelector(ID); // Use querySelector instead of getElementByClass
              el.style.padding = '0px 6.823px 0px 6.823px';
              box.appendChild(el);
          }
  
          if(firstImg != '-1')
          {
              const el = document.createElement('img');
              el.src = firstImg;
              el.classList.add('icon2');
              const box = document.querySelector(ID); // Use querySelector instead of getElementByClass
              box.appendChild(el);
              // box.style.left = '-20px'
          }
      }

      
  }
  // var ID = '.box1b';
  // var dir = 'right';
  // var firstImg ="icons/Poor Endurance Icon Red.png";
  // firstImg='-1'
  // firstImg = '-1';
  // var secondImg = "icons/EMG ICon.png";
  // var firsttext = "Excellent";
  // var secondtext = "Shoulder <br>& Neck" ;
  
  // var ID1 = '.box2b' 
  // var dir1 = 'l'
  // firstImg ='-1'
  
  // addtext('.box2a', "0°-18°", "Flexion");
  // addtext('.box2a', "0°-18°", "Extension");
  // addtext('.box2a', "0°-18°", "Abduction");
  // //   addtext('.box2a', "0°-18°", "Adduction");
  // addImage('.box2a', "icons/ROM Red.png");
  
  
  // Outer Box:-
  function addOuterLine_Head(ID, data, dir)
  {
      const el = document.createElement('div');
      const el1 = document.createElement('div');
      el.innerHTML ="<br>" + "<b style = 'font-size: 7.14px;'>" +data +"</b>";
      if(dir == 'Left')el.classList.add('hipl');
      else el.classList.add('hip');
      el1.appendChild(el);
      el1.classList.add('p');
      el1.style.height = '14.294pt';
      el1.style.width = '115.65pt';
      const box = document.querySelector(ID); // Use querySelector instead of getElementByClass
      box.appendChild(el1);
  }
  
  // addOuterLine_Head('.b1', 'Shoulder');
  
  // s1 = "shailab";
  // var shift = ['0px','10px', '20px', '30px', '40px', '50px', '60px', '70px', '80px', '90px', '100px']
  var count =1;

  function assit(data)
  {
    if(data == '')return '';
    else return  data;
  }

  // function sidebox(dir, page, id)
  // {
  //   if(id == '.p2b1' || id == '.p2b2')
  //   {
  //     return id;
  //   }
  //   if(dir == 'Right')
  //   {
  //       if(page == 1)return '.b2';
  //       else return '.p2b2';
  //   }
  //   else
  //   {
  //     if(page == 1)return '.b';
  //       else return '.p2boxl';
  //   }
  // }
  function addOuterLine(ID, icon, Information, UV, assisted,emg_d, present, dir)
  {
      count++;
      var colr = '#44C02F' 
      if(present == 'A')
      {
        colr = '#505050';
        UV = '?';
        assisted = "";
        icon = '/icons/icons/blank.jfif';
      }
      if(icon == '/icons/icons/blank.jfif')
      {
        colr = '#505050';
      }
      else if(icon == '/icons/icons/Fair.png')
      {
          colr = '#E6A000'
      }
      else if(icon == '/icons/icons/Needs Attention.png')
      {
          colr = '#CC2016'
      }
      var s1 = "";
      if(dir == 'Left')
      {
        s1 = "<div style = 'position:relative; height:27.635pt; width:116.68pt;><div style='height:27.635pt; width:116.68pt; margin-left:4.9129pt>"+
        "<p class = 'gluteusl' style = 'color :"+ colr +";font-size: 8.16px;margin-top:2.5pt'>"+Information+"</p>"
        +"<img style = height:9.18px; width:9.7053px; margin-left:9.8258px; margin-top:8.054px;' class = 'goodl'src ='"+ icon+"'/>"+ "</div>"
        + "<text class = 'assitedl'><I>"+ assit(assisted)+"</I></text>"+"<p class='uvl'>("+UV+" uv)</p></div>" ;
      }
      else
      {
        s1 = "<div style='display:inline-flex'; margin-left:4.9129px>"
        +"<img style = 'height:9.18px; width:9.7053px; margin-left:6.12px; margin-top:8.054px;' class = 'good'src ='"+ icon+"'/>"+
        "<p class = 'gluteus' style = 'color :"+ colr +";font-size: 8.16px;;margin-top:2.5pt'>"+Information+"</p>"
        + "</div>"
        +"<p class='uv'>("+UV+" uv)</p>" + "<text class = 'assited'><I>"+ assit(assisted)+"</I></text>";
      }
     
      const el = document.createElement('div');
      el.innerHTML =s1;
      if(dir == "Left")el.classList.add('infol');
      else el.classList.add('info');
      
      const box = document.querySelector(ID); 
      box.appendChild(el);
  
      // const box1 = document.querySelector('#box1'); 
      // box1.style.bottom = shift[count];
      // const box2 = document.querySelector('#box2'); 
      // box2.style.bottom = shift[count];
      
      // const box2 = document.querySelector('.fit');
      // var s = 750 - count*10;
      // box2.style.top = s+'px';
  }
  
  icon = '/icons/icons/Fair.png';
  Information = 'Gluteus Maximus';
  ID = '.b1';
  UV = 209;
  
  // addOuterLine(ID, icon, Information, UV);
  // addOuterLine(ID, 'icons/Good.png', Information, UV);
  // // addOuterLine(ID, icon, Information, UV);
  
  // addOuterLine(ID, 'icons/Needs Attention.png', Information, UV);
  
  // addOuterLine(ID, icon, Information, UV);
  // addOuterLine_Head('.b1', 'Hip');
  // addOuterLine('.b1', icon, Information, UV);
  // addOuterLine('.b1', icon, Information, UV);
  
  // addOuterLine_Head('.b2', 'Hip');
  // addOuterLine('.b2', icon, Information, UV);
  // addOuterLine('.b2', icon, Information, UV);
  
  // addOuterLine_Head('.b2', 'Hip');
  // addOuterLine('.b2', icon, Information, UV);
  // addOuterLine('.b2', 'icons/Needs Attention.png', Information, UV);
  // addOuterLine(ID, icon, Information, UV);
  // addOuterLine(ID, icon, Information, UV);
  // addOuterLine(ID, icon, Information, UV);
  
  // page Spliting
  
  function secondPage(injured, gender)
  {

      var pagem = document.querySelector(".secondPage");
      pagem.classList.add('page2');
      var page = document.createElement("div");
          page.classList.add("subpage2");
  
          var image = document.createElement("img");
          image.src = secondPageImage;
          image.classList.add('p2fit');
          image.style.width = ws2;
          image.style.height = hs2;
          page.appendChild(image);
          page.setAttribute('id', 'page2');
          pagem.appendChild(page);
          // document.body.appendChild(pagem);

          var mpage2 = document.querySelector("#shaip2");
          // var mpage3 = document.querySelector("#mpage3");
          mpage2.style.position = 'relative';
          // mpage3.style.position = 'relative';
          mpage2.style.top = '1200px';
          // mpage3.style.top = '100px';
          // mpage2.style.backgroundColor= '#ffffff'



          var dotposition = [];

          if(gender == 'female')dotposition= [['0px', '0px'], ['267.8235pt', '158.941pt'], ['311.70pt', '158.941pt'], ['257.588pt', '204.70588pt'], ['325.2588pt', '204.70588'], ['248.0588pt', '230.823pt'], ['317.0645pt', '230.823pt'], ['281.47pt', '213.3529pt'], ['300.694pt', '213.3529pt'], ['268.0588pt', '239.47pt'], ['296.10pt', '239.47pt'], ['272.3pt', '310.47pt'], ['291.329pt', '310.47pt'], ['275.8823pt', '363.88pt'], ['290.28pt', '363.88pt']];
          else dotposition= [['0px', '0px'], ['267.8235pt', '156.941pt'], ['313.70pt', '156.941'], ['255.588pt', '204.70588pt'], ['328.2588pt', '204.70588pt'], ['250.0588pt', '238.823pt'], ['337.7645pt', '238.823pt'], ['281.47pt', '218.3529pt'], ['300.694pt', '218.3529pt'], ['278.0588pt', '252.47pt'], ['309.10pt', '252.47pt'], ['281.811pt', '310.47pt'], ['304.329pt', '310.47pt'], ['285.88235pt', '365.88pt'], ['302.28pt', '365.88pt']];
          for(var i =1;i<=14;i++)
          {
              var s1 = 'p2d'+i;
              var d1 = document.createElement("div");
              d1.classList.add('dot');
              d1.classList.add(s1);
              // d1.setAttribute('id', s1);
              var d1i = document.createElement("div");
              d1i.classList.add('abc');
              d1.appendChild(d1i);
              page.appendChild(d1);
              s1 = '.p2d' + i;
             
              var id = document.querySelector(s1);
              id.style.left = dotposition[i][0];
              id.style.top = dotposition[i][1];
              id.style.visibility = 'hidden';
              if(injured == "Left" && i%2==1)
              {
                d1.style.background ='#DBF5D6';
                d1i.style.background ='#92E184';
              }
              else if(injured == 'Right' && i%2 == 0)
              {
                d1.style.background ='#DBF5D6';
                d1i.style.background ='#92E184';
              }
              else if(injured == 'Empty' || injured == '')
              {
                d1.style.background ='#DBF5D6';
                d1i.style.background ='#92E184';
              }
          }

          var dls = document.createElement('text');
              dls.innerHTML = "<p class = 'belowright' style = 'position:absolute; bottom:301pt;left:157pt; font-size:10.2px;'>Right Side ("+rightb(injured)+")</p>"+
                "<p class = 'belowleft' style = 'position:absolute; bottom:301pt;right:177.4pt;font-size:10.2px;'>Left Side ("+leftb(injured)+")</p>";
                page.appendChild(dls);
          // line for page two
          for(var i = 1;i <=20;i++)
          {
              var s1 = 'p2line'+i+ 'a';
              var d1 = document.createElement("div");
              d1.classList.add('line');
              // d1.classList.add(s1);
              d1.setAttribute('id', s1);
              page.appendChild(d1);
              var s2 = 'p2line'+i+ 'b';
              var d2 = document.createElement("div");
              d2.classList.add('line');
              // d1.classList.add(s1);
              d2.setAttribute('id', s2);
              // <div class = "belowright" style = "position:absolute; bottom:48pt;left:230pt;">Right Side (Affected Side)</div>
              // <div class = "belowleft" style = "position:absolute; bottom:48pt;right:260pt;">Left Side (Affected Side)</div>
             
              page.appendChild(d2);
              
              // page.appendChild(dls2);
          }
          
          // creating inner boxes on page 2
  
          for(var i = 1; i<=14; i++)
          {
              var s1 = 'p2box'+i;
              var d1 = document.createElement("div");
              var s11 = 'p2box-position'+i;
              d1.classList.add(s11);
              d1.setAttribute('id', s1);
              d1.classList.add('box');
              var d1i = document.createElement("div");
              d1i.classList.add('innerbox1');
              s11 = 'p2box'+i+'a';
              d1i.classList.add(s11);
              var s1i = s11 +'i';
              var d1i1 = document.createElement("div");
              d1i1.classList.add(s1i);
              if(i%2==1)d1i1.classList.add('left');
              else d1i1.classList.add('right');
              
              d1i.appendChild(d1i1);
              d1.appendChild(d1i);
              var d2i = document.createElement("div");
              if(i%2 == 1)d2i.classList.add('innerbox2r');
              else d2i.classList.add('innerbox2l');
              
              var sb = 'p2box'+i+'b';
              d2i.classList.add(sb);
              d2i.style.visibility = "visible";
              d1.appendChild(d2i);
              page.appendChild(d1);
              s1 = '#'+s1;
              // var db1 = document.querySelector(s1);
              
          }
          
          // const el1 = document.createElement('text');
          //     el1.innerHTML ="<br>" + "<b>" +"0°-18°" +"</b>" +" "+ "Adduction";
  
          //     const box1 = document.querySelector('.p2box1a'); // Use querySelector instead of getElementByClass
          //     box1.appendChild(el1);
  
      // implementing side Bar for second page
              var s1 = 'p2obox1';
              var d1 = document.createElement("div");
              d1.classList.add('p2boxr');
              // d1.setAttribute('id', s1);
              var hm1 = "<div class='muscles'>"+
              "<h4 style='text-align: center;font-size: 10.2px;'><b style='padding-right: 2.729pt;'>Muscles</b>(Right Side)</h4>"+
          "</div>"+
          "<div class = 'p2b1' style = 'position:relative;right:10px;'>" + "</div>";

           
          d1.innerHTML = hm1;
          page.appendChild(d1);
          
  
          var s2 = 'p2obox2';
              var d2 = document.createElement("div");
              d2.classList.add('p2boxl');
              // d2.setAttribute('id', s2);
              // d2.style.float = "right";
              var hm2 = "<div class='musclesl'>"+
              "<h4 style='text-align: center;font-size: 10.2px; padding-right:5px;'>(Left Side)<b style='padding-left: 2.047pt;'>Muscles</b></h4>"+
          "</div>"+
          "<div class = 'p2b2'>" + "</div>";
          d2.innerHTML = hm2;
          page.appendChild(d2);
  
  }
  
  // secondPage();
  
  //         addtext('.p2box1a', "0°-18°", "Abduction");
  //         addtext('.p2box1a', "0°-18°", "Adduction");
  //         addImage('.p2box1a', 'icons/ROM Icon.png');
  //         addlower('.p2box1b', dir, firstImg, firsttext, secondImg, secondtext); 
  // icon

  // Normative reps

  function nreps(joint, exe)
{
    if(exe == 'Isometric')
    {
      return -1;
    }
    if(joint == "Shoulder")
    {
        if(exe == 'Flexion') return (9.0/90.0);
        else if(exe == 'Extension') return (13.0/90.0);
        else if(exe == 'Adduction' || exe == 'Abduction') return (12.0/90.0)
    }
    else if(joint == "Wrist")
    {
        if(exe == 'Flexion') return (16.0/90.0);
        else if(exe == 'Extension') return (17.0/90.0);
    }
    else if(joint == "Elbow" || joint == "Elbow")
    {
        if(exe == 'Flexion') return (14.0/90.0);
        else if(exe == 'Extension') return (14.0/90.0);
        else if(exe == 'Supination') return (15.0/90.0);
        else if(exe == 'Pronation') return (14.0/90.0);
    }
    else if(joint == "Hip")
    {
        if(exe == 'Flexion') return (14.0/90.0);
        else if(exe == 'Extension') return (12.0/90.0);
        else if(exe == 'Adduction')return (13.0/90.0);
        else if(exe == 'Abduction') return -1;
    }
    else if(joint == "Knee")
    {
        if(exe == 'Flexion') return (16.0/90.0);
        else if(exe == 'Extension') return (16.0/90.0);
    }
    else if(joint == "Ankle")
    {
        if(exe == 'Plantar flexion') return (18.0/90.0);
        else if(exe == 'Dorsi flexion') return (18.0/90.0);
        else if(exe == 'Inversion')return (15.0/90.0);
        else if(exe == 'Eversion')return (17.0/90.0);
    }
    else
    {
        if(exe == 'Flexion')return (11.0/90.0);
        else if(exe == 'Extension')return (12.0/90.0);
        else if(exe == 'Lateral Flexion' )return (11.0/90.0);
        else if(exe == 'Rotation')return -1;
    }
}

function is_poor(data1, data2)
{
  if(data1 < data2)return 1;
  return 0;
}

// Normative ROM

function nRom(joint, exe)
{
    if(joint == "Shoulder")
    {
        if(exe == 'Flexion') return 180;
        else if(exe == 'Extension') return 45;
        else if(exe == 'Adduction' ) return 180;
        else if(exe == 'Abduction') return 180;
        else if(exe == 'Horizontal adduction')return 45;
    }
    else if(joint == "Wrist")
    {
        if(exe == 'Flexion') return 80;
        else if(exe == 'Extension') return 70;
    }
    else if(joint == "Elbow" || joint == "Elbow")
    {
        if(exe == 'Flexion') return 145;
        else if(exe == 'Extension') return 145;
        else if(exe == 'Supination') return 90;
        else if(exe == 'Pronation') return 90;
    }
    else if(joint == "Hip")
    {
        if(exe == 'Flexion') return 125;
        else if(exe == 'Extension') return 10;
        else if(exe == 'Adduction')return 10;
        else if(exe == 'Horizontal Adduction') return 55;
    }
    else if(joint == "Knee")
    {
        if(exe == 'Flexion') return 140;
        else if(exe == 'Extension') return 140;
    }
    else if(joint == "Ankle")
    {
        if(exe == 'Plantar flexion') return 45;
        else if(exe == 'Dorsi flexion') return 20;
        else if(exe == 'Inversion')return 40;
        else if(exe == 'Eversion')return 20;
    }
    else
    {
        if(exe == 'Flexion')return 75;
        else if(exe == 'Extension')return 30;
        else if(exe == 'Lateral Flexion' )return 35;
        else if(exe == 'Rotation')return 30;
    }

    return 1;
}

function percent(data1, data2)
{
  return (data1/data2)*100;
}
function icon1(data, iconNumber)
{
    if(iconNumber ==1)
    {
        if(data == -1000) return '/icons/icons/blank.jfif';
        else if(data <= 25)return '/icons/icons/Needs Attention.png';
        else if(data <=50)return '/icons/icons/Fair.png';
        else if(data <= 75)return '/icons/icons/Good.png';
        else return '/icons/icons/Excellent.png';
    }
    else if(iconNumber == 2)
    {
        if(data <= 33)return '/icons/icons/ROM Red.png';
        else if(data <= 66)return '/icons/icons/ROM Yellow.png';
        else return '/icons/icons/ROM Green.png';
    }
    else if(iconNumber == 3)
    {
        if(data == 1000)return '/icons/icons/EMG icon Black.png';
        if(data <= 25)return '/icons/icons/EMG icon Red.png';
        else if(data <=50)return '/icons/icons/EMG icon Yellow.png';
        else return '/icons/icons/EMG icon Green.png';
    }
}
  
  function lowerinnerdata(data)
  {
      return "Excellent";
  }
  
  function data1(d1, d2)
  {
      var s1 = d1 +'°-'+d2+'°';
      return s1;
  }
  
  

  
  
  function line_Visible(id1, id2)
  {
      var d1 = document.querySelector(id1);
      // d1.style.visibility = 'visible';
      var d2 = document.querySelector(id2);
      // d2.style.visibility = 'visible';
  }
  
  function lower_data(data1, data2)
  {
      var d = ['', '', '', '']
  
      if(data1 <= 25)
      {
          d[2] = "/icons/icons/EMG icon Red.png";
          d[1] = "Poor";
          d[0] = "/icons/icons/Poor Endurance Icon Red.png";
          d[3] = data2;
      }
      else if(data1 <= 50)
      {
          d[2] = "/icons/icons/EMG icon Yellow.png";
          d[1] = "Fair";
          d[0] = "-1";
          d[3] = data2;
      }
      else if(data1 <= 50)
      {
        d[2] = "/icons/icons/EMG icon Green.png";
          d[1] = "Good";
          d[0] = "-1";
          d[3] = data2;
      }
      else
      {
          d[2] = "/icons/icons/EMG icon Green.png";
          d[1] = "Excellent";
          d[0] = "-1";
          d[3] = data2;
      }
  }

  function joint(joint1)
  {
      if(joint1 == 'Shoulder'|| joint1 == 'Elbow' || joint1 == 'Wrist' || joint1 == 'Knee' || joint1 == 'Hip' || joint1 == 'Ankle')return joint1;
      else if(joint1 == 'Neck')return 'Shoulder';
      else if(joint1 == 'Forearm') return 'Elbow';
      else return 'Trunk';
  }

      
  function jointNum(joint1, dir)
  {
      if(joint1 == 'Shoulder')
      {
        if(dir == "Right")return 1;
        else return 2;
      }
      else if(joint1 == 'Elbow')
      {
        if(dir == "Right")return 3;
        else return 4;
      }
      else if(joint1 == 'Trunk')
      {
        if(dir == "Right")return 5;
        else return 6;
      }
      else if(joint1 == 'Wrist')
      {
        if(dir == "Right")return 7;
        else return 8;
      }
      else if(joint1 == 'Hip')
      {
        if(dir == "Right")return 9;
        else return 10;
      }
      else if(joint1 == 'Knee')
      {
        if(dir == "Right")return 11;
        else return 12;
      }
      else
      {
        if(dir == "Right")return 13;
        else return 14;
      }
  }

  function firstImg(data)
  {
      if(data<=25)return '/icons/icons/Poor Endurance Icon Red.png';
      // else if(data <= 50)return '/icons/icons/Fair.png';
      // else if(data <= 75)return '/icons/icons/Good.png';
      // else return '/icons/icons/Excellent.png';
      else return '-1';
  }

  function firsttext(data, data1, data2)
  {
      if(data == 1000)return '-';
      if(data <=25)return "<text style = 'color:#CC2016;'>"+ data2+" of "+data1+" Poor </text>" ;
      else if(data <= 50)return "<text style = 'color:#E6A000;'> Fair </text>" ;
      else if(data <= 75)return "<text style = 'color:#44C02F;'> Good </text>" ;
      else return "<text style = 'color:#44C02F;'> Excellent </text>" ;
  }

  function secondtext(joint1, dir)
  {
      if(joint1 == 'Trunk'||joint1 == 'Wrist' || joint1 == 'Knee' || joint1 == 'Hip' || joint1 == 'Ankle')return joint1;
      else if(joint1 == 'Shoulder')
      {
        if(dir == 'Left')return 'Shoulder<br>& Neck';
        else return 'Shoulder<br>&nbsp;& Neck';
      }
      else if(joint1 == 'Elbow')
      {
        if(dir == 'Left')return 'Forearm <br>& Elbow';
        else return 'Forearm<br>&nbsp;& Elbow';
      }
  }

  // addtext('.box2a', "0°-18°", "Abduction");
  // //   addtext('.box2a', "0°-18°", "Adduction");
  // addImage('.box2a', "icons/ROM Red.png");
  // addlower('.box2b ', 'right', firstImg(18), firsttext(18), 'icons/Poor Endurance Icon.png', 'Shoulder');
function rightb(effected)
{
  if(effected == 'Right' || effected == 'Bi-Lateral')return 'Affected Side';
  else return 'Healthy Side';
}

function leftb(effected)
{
  if(effected == 'Left' || effected == 'Bi-Lateral')return 'Affected Side';
  else return 'Healthy Side';
}
 
  function movement(arr3)
  {
      var i =0, j =0;
      var arr = [];

      // arr3.sort();

     
      while(i<arr3.length)
      {
        // if(arr1[])
        
          var arr1 = [0,'', '',0, '',1000, -1];
          arr1[4]= joint(arr3[i][0]);
          arr1[0] = jointNum(joint(arr3[i][0]), arr3[i][2]);
          arr1[1]=arr3[i][2];
          arr1[2]=arr3[i][1];
          arr1[3]=Math.abs(arr3[i][4] - arr3[i][7]);
          arr1[6] = percent(Math.abs(arr3[i][4] - arr3[i][7]), nRom(arr3[i][0], arr3[i][1]));
          if(arr3[i][2] == 'Isometric')
          {
            arr1[5]=1000;
            i++;
          }
          else
          {
            while(j<arr3.length && arr1[4] == joint(arr3[j][0]) && arr1[1] == arr3[j][2] &&  arr1[2]==arr3[j][1])
            {
                if(arr3[i][2] != 'Isometric')
                {
                  if(arr1[3]<Math.abs(arr3[j][4] - arr3[j][7]))arr1[3]=Math.abs(arr3[j][4] - arr3[j][7]);
                  if(arr1[6]<percent(Math.abs(arr3[j][4] - arr3[j][7]), nRom(arr3[j][0], arr3[j][1])))arr1[6]=percent(Math.abs(arr3[j][4] - arr3[j][7]), nRom(arr3[j][0], arr3[j][1]));
                }
                // if(arr5[j][4])
                j++;
            }
          if(i!=j)i=j;
          else i++;
          }

          arr.push(arr1);
          
      }

      i=0,j=0;
      arr =arr.sort(function(a, b) { return a[0] - b[0]; });

      // console.log('mv', arr);

      while(i<arr.length)
      {
          if(arr[i][5]!= 'Isometric')
          {
            var num=arr[i][6];
          
            while(j<arr.length && arr[i][4] == arr[j][4] && arr[i][1] == arr[j][1])
            {
                if(arr[j][6]<num && arr[j][5] != 'Isometric')num=arr[j][6];
                j++;
            }
            var k =i;

            while(k<j)
            {
              if(arr[i][2] != 'Isometric')
              {
                arr[k][5]=num;
              }
                
                k++;
            }
            if(i !=j)i=j;
            else i++;
          }
          else i++;
          
      }
      var a1 =arr.sort(function(a, b) { return a[0] - b[0]; });
      return a1;
  }

  function jointNum1(joint1)
  {
      if(joint1 == 'Shoulder')return 1;
      else if(joint1 == 'Neck')return 2;
      else if(joint1 == 'Elbow')return 3;
      else if(joint1 == 'Forarm')return 4;
      else if(joint1 == 'Wrist')return 5;
      else if(joint1 == 'Hip')return 6;
      else if(joint1 == 'Knee')return 7;
      else if(joint1 == 'Ankle')return 8;
      else return 4;
  }

  // adding normative emg column
  function add_normative_emg(arr3)
  {
    var n_emg = {};
    n_emg["ShoulderFlexionDeltoid"]                     =600.5757576;
    n_emg["ShoulderExtensionLatissimus Dorsi"]          =140.5333333;
    n_emg["ShoulderAbductionDeltoid"]                   =708.6666667;
    n_emg["ShoulderAdductionPectoralis Major"]          =195.1212121;
    n_emg["WristFlexionFlexor Carpi Radialis"]          =93.34285714;
    n_emg["WristExtensionExtensor Digitrum"]            =303.1025641;
    n_emg["ForearmSupinationSupinator"]                 =59.97435897;
    n_emg["ForearmPronationPronatorQuadratus"]          =95.97222222;
    n_emg["ElbowFlexionBiceps"]                         =236.025641;
    n_emg["ElbowExtensionTriceps"]                      = 148.8333333;
    n_emg["HipFlexionTensor Fasciae Latae"]             =266;
    n_emg["HipExtensionGluteus Maximus"]                =134.5;
    n_emg["HipAbductionGluteus Medius"]                 =97.75;
    n_emg["HipAdductionAdductor Magnus"]                =90.25925926;
    n_emg["KneeFlexionGastrocnemius"]                   =141.6222222;
    n_emg["KneeExtensionRectus Femoris"]                =99.97619048;
    n_emg["AnklePlantarFlexion	Soleus"]                =69.97619048;
    n_emg["AnkleDorsi FlexionTibialis Anterior"]        =271.7333333;
    n_emg["AnkleInversionTibialis Anterior"]            =111.4615385;
    n_emg["AnkleEversionPeroneus Longus"]               =158.1666667;
    n_emg["ThoracicFlexionSpinalis Thoracis"]           =76.16666667;
    n_emg["ThoracicExtensionSpinalis Thoracis"]         =61.90909091;
    n_emg["ThoracicLateral FlexionSpinalis Thoracis"]   =54.55555556;
    n_emg["ThoracicRotationSpinalis Thoracis"]          =94.23333333;
    n_emg["LumbarFlexionRectus Abdominis"]              =127.2424242;
    n_emg["LumbarExtension	Quadratus Lumborum"]        =63.51515152;
    n_emg["LumbarLateral FlexionPsoas Major"]           =47.96969697;
    n_emg["LumbarLateral FlexionQuadratus Lumborum"]    =66.93939394;
    n_emg["LumbarRotationMultifidus"]                   =51;
    n_emg["AbdomenFlexionRectus Abdominis"]             =84.46666667;
    n_emg["AbdomenLateral FlexionRectus Abdominis"]     =73.30555556;
    n_emg["AbdomenRotationExternal Oblique"]            =72.39393939;
    for(var i =0;i<arr3.length;i++)
    {
      var s = arr3[i][0]+arr3[i][3]+arr3[i][1];
      var num = -1000;

      if(n_emg[s]!=null)
      {
        num = (arr3[i][5]/n_emg[s])*100;
      }

      arr3[i].push(num);
    }
    return arr3;
  }

  function muscleDuplication(arr3)
  {
    var i =0, j =0;
      var arr = [];

      var arr2 = []
     
      while(i<arr3.length)
      {
          var arr1 = [0,'', '','', 0,'',0,'P'];
          arr1[4]= joint(arr3[i][0]);
          arr1[0] = jointNum1(arr3[i][0]);
          arr1[1]=arr3[i][0];
          arr1[2]=arr3[i][1];
          arr1[3]=arr3[i][2];
          arr1[4]=arr3[i][5];
          arr1[5]=arr3[i][8];
          arr1[6]=arr3[i][9];
          while(j<arr3.length && arr1[1] == arr3[j][0] && arr1[2] == arr3[j][1] &&  arr1[3]==arr3[j][2])
          {
              if(arr1[4]<arr3[j][5]){arr1[4]=arr3[j][5]; arr1[5]=arr3[i][8];arr1[6]=arr3[j][9];}
              j++;
          }

          
          if(i!=j)i=j;
          else i++;
          arr.push(arr1);
          
      }

      var m1 = {};
      var m2 = {};

      for(var i =0;i<arr.length;i++)
      {
        var s1 = arr[i][1]+arr[i][2];
        m1[s1]=null;
        m2[s2]=null;
      }

      for(var i =0;i<arr.length;i++)
      {
        var s1=[];
        for(var j =0;j<arr[i].length;j++)
        {
          s1.push(arr[i][j]);
        }
        arr2.push(s1);
      }


      for(var i =0;i <arr.length; i++)
      {
        if(arr[i][3] == 'Left')
        {
          var s1 = arr[i][1]+arr[i][2];
          m1[s1]=arr[i];
        }
        else
        {
          var s1 = arr[i][1]+arr[i][2];
          m2[s1]=arr2[i];
        }
      }

      var a2 = [];
      var n =arr.length;
      var m3 = {};

      for(var i =0;i<n;i++)
      {
        var s1 = arr[i][1]+arr[i][2];
        var s2 = arr2[i][1]+arr2[i][2];
        if(m3[s1]==null)
        {
            if(m1[s1]!=null)
            {
              a2.push(m1[s1]);
            }
            else
            {
              
              var aa = m2[s1];
              var sh = [7, 'Knee', 'Rectus Femoris', 'Right', 266, 'Lethargic', -1000, 'A'];
              for(var j =0;j<aa.length;j++)
              {
                sh[j]=aa[j];
              }
              sh[3]='Left';
              sh[7]='A';
              a2.push(sh);
            }


            if(m2[s1]!=null)
            {
              a2.push(m2[s1]);
            }
            else
            {
              var aa = m1[s1];
              var sh = [7, 'Knee', 'Rectus Femoris', 'Right', 266, 'Lethargic', -1000, 'A'];
              for(var j =0;j<aa.length;j++)
              {
                sh[j]=aa[j];
              }
              sh[3]='Right';
              sh[7]='A';
              a2.push(sh);
            }
            m3[s1]=1;
        }
      }

      a2.sort();
      return a2;
  }

  // id mapping
  var mapid ={};
  mapid['Shoulder'] = ['.box1a', '.box1b', '.box2a','.box2b', '.p2box1a','.p2box1b' , '.p2box2a', '.p2box2b', '.dot1', '.dot2', '.p2d1', '.p2d2', '.line1a', '.line1b', '.line2a', '.line2b', '.p2line1a', '.p2line1b', '.p2line2a', '.p2line2b'] 
  mapid['Elbow'] = ['.box3a', '.box3b', '.box4a','.box4b', '.p2box3a','.p2box3b' , '.p2box4a', '.p2box4b', '.dot3', '.dot4', '.p2d3', '.p2d4','.line3a', '.line3b', '.line4a', '.line4b', '.p2line3a', '.p2line3b', '.p2line4a', '.p2line4b'] 
  mapid['Wrist'] = ['.box5a', '.box5b', '.box6a','.box6b', '.p2box5a','.p2box5b' , '.p2box6a', '.p2box6b', '.dot5', '.dot6', '.p2d5', '.p2d6', '.line5a', '.line5b', '.line6a', '.line6b', '.p2line5a', '.p2line5b', '.p2line6a', '.p2line6b'] 
  mapid['Trunk'] = ['.box7a', '.box7b', '.box8a','.box8b', '.p2box7a','.p2box7b' , '.p2box8a', '.p2box8b', '.dot7', '.dot8', '.p2d7', '.p2d8', '.line7a', '.line7b', '.line8a', '.line8b', '.p2line7a', '.p2line7b', '.p2line8a', '.p2line8b'] 
  mapid['Hip'] = ['.box9a', '.box9b', '.box10a','.box10b', '.p2box9a','.p2box9b' , '.p2box10a', '.p2box10b', '.dot9', '.dot10', '.p2d9', '.p2d10', '.line9a', '.line9b', '.line10a', '.line10b', '.p2line9a', '.p2line9b', '.p2line10a', '.p2line10b'] 
  mapid['Knee'] = ['.box11a', '.box11b', '.box12a','.box12b', '.p2box11a','.p2box11b' , '.p2box12a', '.p2box12b', '.dot11', '.dot12', '.p2d11', '.p2d12', '.line11a', '.line11b', '.line12a', '.line12b', '.p2line11a', '.p2line11b', '.p2line12a', '.p2line12b'] 
  mapid['Ankle'] = ['.box13a', '.box13b', '.box14a','.box14b', '.p2box13a','.p2box13b' , '.p2box14a', '.p2box14b', '.dot13', '.dot14', '.p2d13', '.p2d14', '.line13a', '.line13b', '.line14a', '.line14b', '.p2line13a', '.p2line13b', '.p2line14a', '.p2line14b']  
  
  function dot_Visible(id)
  {
      var d = document.querySelector(id);
      d.style.visibility = 'visible';
  }
  // secondPage();
  
  // addtext('.box14a', "0°-18°", "Flexion");
  // addtext('.box14a', "0°-18°", "Extension");
  // addtext('.p2box2a', "0°-18°", "Abduction");
  //   addtext('.box2a', "0°-18°", "Adduction");
  // addImage('.box14a', "icons/ROM Red.png");
  // addlower('.box14b ', dir, firstImg, firsttext, secondImg, secondtext);
  
  // var arr = [['joint'], ['muscle'], ['side'], ['movement'], ['movement data'], ['muscle data'] ];

  function muscleP(id, p)
  {
    var lp = document.querySelector(id);
    var s1 = '';
    s1 = p+'pt';
    lp.style.top= s1;
  }
 

  function report_new_kranthi(arr5, gender, effectedSide)
  {

    var bl = document.querySelector('.belowleft');
    var br = document.querySelector('.belowright');
    bl.innerHTML = 'Left Side(' + leftb(effectedSide)+ ')';
    br.innerHTML = 'Right Side(' + rightb(effectedSide) + ')';
    changeImage(gender, patient_data, effectedSide);
      var split = 0;
      var leftSize =0;
      var rightSize =0;

      var arrs = [];
      var arr = [];
      for(var i =0; i <arr5.length;i++)
      {
       var al1 = ["", "", "","", 0,0,0,0,""]
       var al2 = ["", "", "","", 0,0,0,0,""]
       for(var j =0;j<arr5[i].length;j++)
       {
        al1[j]=arr5[i][j];
        al2[j]=arr5[i][j];
       }
        arrs.push(al1);
        arr.push(al2);
      }

      arr.sort();
      

      // var a1 =arr.sort(function(a, b) { return a[0] - b[0]; });

      // data for poor endurance
      var mapjoint2 = {};
      mapjoint2['Shoulder'] = [0, 0, 0, 0];
      mapjoint2['Forearm'] = [0, 0, 0, 0];
      mapjoint2['Elbow'] = [0, 0, 0, 0];
      mapjoint2['Wrist'] = [0, 0, 0, 0];
      mapjoint2['Trunk'] = [0, 0, 0, 0];
      mapjoint2['Hip'] = [0, 0, 0, 0];
      mapjoint2['Knee'] = [0, 0, 0, 0];
      mapjoint2['Ankle'] = [0, 0, 0, 0];


      

      var arr1 = muscleDuplication(arrs);
      for(var i =0;i<arr1.length;i++)
      {
        if(arr1[i][7] == 'P')
        {
          if(arr1[i][3] == 'Left')
          {
            mapjoint2[joint(arr1[i][1])][0]++;
            if(arr1[i][6] != -1000 && arr1[i][6] <=33)
            {
              mapjoint2[joint(arr1[i][1])][1]++;
            }
          }
          else
          {
            mapjoint2[joint(arr1[i][1])][2]++;
            if(arr1[i][6] != -1000 && arr1[i][6] <=33)
            {
              mapjoint2[joint(arr1[i][1])][3]++;
            }
          }
        }
      }
      for(var i =0;i <arr.length; i++)
      {
        var num = arr[i][1];
        arr[i][1] = arr[i][3];
        arr[i][3] = num;
      }
      arr.sort();
      console.log('vynk', arr);
      var a = movement(arr);
      console.log('abc',a);


      var mapP1 = {};// idleft, idright, start, page_no, maxsize, maxleft, maxright, idp2left, idp2right, startp2;
      mapP1['Shoulder'] = ['.box-postion1','.box-postion2',70, 0, 0, 0,0,'.p2box-position1','.p2box-position2',58,0, 0];
      mapP1['Elbow'] = ['.box-postion3','.box-postion4',140, 0, 0, 0,0,'.p2box-position3','.p2box-position4',135,0, 0];
      mapP1['Trunk'] = ['.box-postion7','.box-postion8',180, 0, 0, 0,0,'.p2box-position7','.p2box-position8',150.11,0, 0];
      mapP1['Wrist'] = ['.box-postion5','.box-postion6',240, 0, 0, 0,0,'.p2box-position5','.p2box-position6',204.7,0, 0];
      mapP1['Hip'] = ['.box-postion9','.box-postion10',240, 0, 0, 0,0,'.p2box-position19','.p2box-position10',238,0, 0];
      mapP1['Knee'] = ['.box-postion11','.box-postion12',240, 0, 0, 0,0,'.p2box-position11','.p2box-position12',272.94,0, 0];
      mapP1['Ankle'] = ['.box-postion13','.box-postion14',240, 0, 0, 0,0,'.p2box-position13','.p2box-position14',327.529,0, 0];

      var count = 0;
     
      for(var i =0;i<a.length;i++)
      {
        if(mapP1[a[i][4]][11] == 0)
        {
          count++;
          mapP1[a[i][4]][11] =1;
        }
      }

      var pb3 = [110,220,320];

     

      console.log("count", count);
      

      for(var i =0;i<a.length;i++)
      {
        if(a[i][1] == "Left")mapP1[a[i][4]][5]+=15;
        else  mapP1[a[i][4]][6] +=15;
        if(mapP1[a[i][4]][5] > mapP1[a[i][4]][4])mapP1[a[i][4]][4] = mapP1[a[i][4]][5];
        if(mapP1[a[i][4]][6] > mapP1[a[i][4]][4])mapP1[a[i][4]][4] = mapP1[a[i][4]][6];
      }




      console.log('mp', mapP1);

      var lsize = 15;

      for(var i =0;i<a.length;i++)
      {
         if(mapP1[a[i][4]][3] == 0)
         {
          if(mapP1[a[i][4]][2] < lsize)mapP1[a[i][4]][2] = lsize;
          else lsize = mapP1[a[i][4]][2];
          lsize = lsize+mapP1[a[i][4]][4]+35;

          if(mapP1[a[i][4]][2]+mapP1[a[i][4]][4]+10 <= 400)mapP1[a[i][4]][3]=1;
          else mapP1[a[i][4]][3]=2;
         }
      }
// Shailab
      if(count >=3)
      {
        var mnp = {};
        var j=0;
        for(var i =0;i<a.length; i++)
        {
            if(mnp[a[i][4]]==null && j<3)
            {
              mnp[a[i][4]]=1;
              mapP1[a[i][4]][2] = pb3[j];
              mapP1[a[i][4]][3] = 1;
              j++;
            }
            else if(mnp[a[i][4]] ==null && j >=3)
            {
              mapP1[a[i][4]][3] = 2;
            }
        }
      }

      console.log("mm", mapP1);

      lsize = 15;

      for(var i =0;i<a.length;i++)
      {
         if(mapP1[a[i][4]][3]==2 && mapP1[a[i][4]][10]==0)
         {
            if(mapP1[a[i][4]][9] < lsize)mapP1[a[i][4]][9] = lsize;
            else lsize = mapP1[a[i][4]][9];
            mapP1[a[i][4]][10]=1;
            lsize = lsize+mapP1[a[i][4]][4]+28;
         }
      }

      for(var i =0;i<a.length;i++)
      {
         if(mapP1[a[i][4]][3]==2)
         {
          mapP1[a[i][4]][0] = mapP1[a[i][4]][7];
          mapP1[a[i][4]][1] = mapP1[a[i][4]][8]; 
          mapP1[a[i][4]][2] = mapP1[a[i][4]][9];
         }
      }

      for(var i =0;i<a.length;i++)
      {
        console.log(a[i][4], mapP1[a[i][4]]);
      }

      
     
     
      // addtext('.box1a', "0°-18°", "Flexion");
      var mapjoint = {};
      mapjoint['Shoulder'] = [0, 0, 0, 0];
      mapjoint['Neck'] = [0, 0, 0, 0];
      mapjoint['Forearm'] = [0, 0, 0, 0];
      mapjoint['Elbow'] = [0, 0, 0, 0];
      mapjoint['Wrist'] = [0, 0, 0, 0];
      mapjoint['Thoracic'] = [0, 0, 0, 0];
      mapjoint['Lumbar'] = [0, 0, 0, 0];
      mapjoint['Abdomen'] = [0, 0, 0, 0];
      mapjoint['Hip'] = [0, 0, 0, 0];
      mapjoint['Knee'] = [0, 0, 0, 0];
      mapjoint['Ankle'] = [0, 0, 0, 0];
      
      // ###########################Positioning ####################
  
      // var mapPosition = {};
      // mapPosition['Shoulder'] = ['0px', '0px', '0px', '0px'];
      // mapPosition['Elbow'] = ['0px', '0px', '0px', '0px'];
      // mapPosition['Wrist'] = ['0px', '0px', '0px', '0px'];
      // mapPosition['Truck'] = ['0px', '0px', '0px', '0px'];
      // mapPosition['Hip'] = ['0px', '0px', '0px', '0px'];
      // mapPosition['Knee'] = ['0px', '0px', '0px', '0px'];
      // mapPosition['Ankle'] = ['0px', '0px', '0px', '0px'];
  
      // function positioning(id )
      // {
          
      // }
      //trial start
      
var mapjoint1 = {};
mapjoint1['Shoulder'] = [0, 0, 0, 0];
mapjoint1['Elbow'] = [0, 0, 0, 0];
mapjoint1['Wrist'] = [0, 0, 0, 0];
mapjoint1['Trunk'] = [0, 0, 0, 0];
mapjoint1['Hip'] = [0, 0, 0, 0];
mapjoint1['Knee'] = [0, 0, 0, 0];
mapjoint1['Ankle'] = [0, 0, 0, 0];

var emgP = {};
  emgP['Shoulder'] = [1000, 1000];
  emgP['Forearm'] = [1000, 1000];
  emgP['Elbow'] = [1000, 1000];
  emgP['Wrist'] = [1000, 1000];
  emgP['Trunk'] = [1000, 1000];
  emgP['Hip'] = [1000, 1000];
  emgP['Knee'] = [1000, 1000];
  emgP['Ankle'] = [1000, 1000];

  for(var i =0;i<arr1.length;i++)
  {
    if(arr1[i][6]!=-1000)
    {
      if(arr1[i][3] == 'Left')
      {
        if( arr1[i][6]< emgP[joint(arr1[i][1])][0])emgP[joint(arr1[i][1])][0]=arr1[i][6];
      }
      else
      {
        if( arr1[i][6]< emgP[joint(arr1[i][1])][1])emgP[joint(arr1[i][1])][1]=arr1[i][6];
      }
    }
  }


for(var i =0;i <a.length;i++)
{
  if(a[i][1] == 'Left')
  {
    if(mapP1[a[i][4]][3] ==1)
          {
              dot_Visible(mapid[a[i][4]][9]);
              dot_Visible(mapid[a[i][4]][8]);
              mapjoint1[a[i][4]][0]=1;
              addtext(mapid[a[i][4]][2], a[i][3], a[i][2], 'left', a[i][6]);
              mapP1[a[i][4]][5]-=15;
              if(mapP1[a[i][4]][5] == 0)
              {
                addImage(mapid[a[i][4]][2], icon1(a[i][5], 2), 'left');
                addlower(mapid[a[i][4]][3], 'left', firstImg(a[i][5]), firsttext(emgP[joint(a[i][4])][0], mapjoint2[a[i][4]][0], mapjoint2[a[i][4]][1]), icon1(emgP[joint(a[i][4])][0], 3), secondtext(a[i][4]));
                line_Visible(mapid[a[i][4]][14], mapid[a[i][4]][15]);
                muscleP(mapP1[a[i][4]][1],mapP1[a[i][4]][2]);
              }
          }
          else
          {
              if(split ==0)
              {
                  split =1;
                  secondPage(effectedSide,gender);
              } 
              dot_Visible(mapid[a[i][4]][11]);
              dot_Visible(mapid[a[i][4]][10]);


              
              if(mapjoint1[a[i][4]][1] == 0)
              {
                  mapjoint1[a[i][4]][1] = 1;
              }
              addtext(mapid[a[i][4]][6], a[i][3], a[i][2], 'left',a[i][6])

              mapP1[a[i][4]][5]-=15;
              if(mapP1[a[i][4]][5] == 0)
              {
                  addImage(mapid[a[i][4]][6], icon1(a[i][5], 2), 'left');
                  addlower(mapid[a[i][4]][7], 'left', firstImg(a[i][5]), firsttext(emgP[joint(a[i][4])][0], mapjoint2[a[i][4]][0], mapjoint2[a[i][4]][1]), icon1(emgP[joint(a[i][4])][0], 3), secondtext(a[i][4]));
                  line_Visible(mapid[a[i][4]][18], mapid[a[i][4]][19])
                  muscleP(mapP1[a[i][4]][1],mapP1[a[i][4]][2]);
              }
          }
  }
  else  if(a[i][1] == 'Right')
  {
          if(mapP1[a[i][4]][3] ==1)
          {
              dot_Visible(mapid[a[i][4]][8]);
              dot_Visible(mapid[a[i][4]][9]);
              mapjoint1[a[i][4]][2]=1;
              addtext(mapid[a[i][4]][0], a[i][3], a[i][2], 'right',a[i][6])

              mapP1[a[i][4]][6]-=15;
              if(mapP1[a[i][4]][6] == 0)
              {
                addImage(mapid[a[i][4]][0], icon1(a[i][5], 2), 'right');
                  addlower(mapid[a[i][4]][1], 'right', firstImg(a[i][5]), firsttext(emgP[joint(a[i][4])][1], mapjoint2[a[i][4]][2], mapjoint2[a[i][4]][3]), icon1(emgP[joint(a[i][4])][1], 3), secondtext(a[i][4]));
                  line_Visible(mapid[a[i][4]][12], mapid[a[i][4]][13]);
                  muscleP(mapP1[a[i][4]][0],mapP1[a[i][4]][2]);
              }
          }
          else
          {
              if(split ==0)
              {
                  split =1;
                  secondPage(effectedSide,gender);
              }
              dot_Visible(mapid[a[i][4]][10]);
              dot_Visible(mapid[a[i][4]][11]);

              if(mapjoint1[a[i][4]][3] == 0)
              {
                  mapjoint1[a[i][4]][3] = 1;
              }
              
              addtext(mapid[a[i][4]][4], a[i][3], a[i][2], 'right',a[i][6]);

              mapP1[a[i][4]][6]-=15;
              if(mapP1[a[i][4]][6] == 0)
              {
                addImage(mapid[a[i][4]][4], icon1(a[i][5], 2), 'right');
                  addlower(mapid[a[i][4]][5], 'right', firstImg(a[i][5]), firsttext(emgP[joint(a[i][4])][1], mapjoint2[a[i][4]][2], mapjoint2[a[i][4]][3]), icon1(emgP[joint(a[i][4])][1], 3), secondtext(a[i][4]));
                  line_Visible(mapid[a[i][4]][16], mapid[a[i][4]][17]);
                  muscleP(mapP1[a[i][4]][0],mapP1[a[i][4]][2]);
              }

          }
  }

}
//Trial end.
    leftSize=0;
    rightSize=0;
  
    
for(var i =0;i <arr1.length;i++)
{
   
    if(arr1[i][3] == 'Left')
    {

        if(mapP1[arr1[i][1]][3] == 2)
        {
          leftSize = 350;
        }
        if(mapjoint[arr1[i][1]][0] == 0)
        {
            
            leftSize += 40;
            if(leftSize<=300)
            {
                mapjoint[arr1[i][1]][0]=1;
                addOuterLine_Head('.b2', arr1[i][1], arr1[i][3]);
                addOuterLine('.b2',icon1(arr1[i][6],1),arr1[i][2], arr1[i][4], arr1[i][5], arr1[i][6], arr1[i][7],arr1[i][3]);
            }
            else
            {
                if(split ==0)
                {
                    split =1;
                    secondPage(effectedSide,gender);
                } 
                if(mapjoint[arr1[i][1]][1] == 0)
                {
                    addOuterLine_Head('.p2b2', arr1[i][1],arr1[i][3]);
                    mapjoint[arr1[i][1]][1] = 1;
                }
                
                addOuterLine('.p2b2',icon1(arr1[i][6],1),arr1[i][2], arr1[i][4],arr1[i][5], arr1[i][6], arr1[i][7],arr1[i][3]);
            }
        }
        else
        {
            leftSize += 20;
            if(leftSize<=300)
            {
                addOuterLine('.b2',icon1(arr1[i][6],1),arr1[i][2], arr1[i][4],arr1[i][5], arr1[i][6], arr1[i][7],arr1[i][3]);
            }
            else
            {
                if(split ==0)
                {
                    split =1;
                    secondPage(effectedSide,gender);
                }

                if(mapjoint[arr1[i][1]][1] == 0)
                {
                    leftSize+=20;
                    addOuterLine_Head('.p2b2', arr1[i][1],arr1[i][3]);
                    mapjoint[arr1[i][1]][1] = 1;
                }

                addOuterLine('.p2b2',icon1(arr1[i][6],1),arr1[i][2], arr1[i][4],arr1[i][5], arr1[i][6], arr1[i][7],arr1[i][3]);
            }
        }
    }
    else  if(arr1[i][3] == 'Right')
    {

      if(mapP1[arr1[i][1]][3] == 2)
      {
        rightSize = 350;
      }
        if(mapjoint[arr1[i][1]][2] == 0)
        {
            
            rightSize += 40;
            if(rightSize<=300)
            {
                mapjoint[arr1[i][1]][2]=1;
                addOuterLine_Head('.b1', arr1[i][1],arr1[i][3]);
                addOuterLine('.b1',icon1(arr1[i][6],1),arr1[i][2], arr1[i][4],arr1[i][5], arr1[i][6], arr1[i][7],arr1[i][3]);
            }
            else
            {
                if(split ==0)
                {
                    split =1;
                    secondPage(effectedSide,gender);
                }
                if(mapjoint[arr1[i][1]][3] == 0)
                {
                    addOuterLine_Head('.p2b1', arr1[i][1],arr1[i][3]);
                    mapjoint[arr1[i][1]][3] = 1;
                }
                
                addOuterLine('.p2b1',icon1(arr1[i][6],1),arr1[i][2], arr1[i][4],arr1[i][5], arr1[i][6], arr1[i][7],arr1[i][3]);
            }
        }
        else
        {
            rightSize += 20;
            if(rightSize<=300)
            {
                addOuterLine('.b1',icon1(arr1[i][6],1),arr1[i][2], arr1[i][4],arr1[i][5], arr1[i][6], arr1[i][7],arr1[i][3]);
            }
            else
            {
                if(split ==0)
                {
                    split =1;
                    secondPage(effectedSide,gender);
                }
                if(mapjoint[arr1[i][1]][3] == 0)
                {
                    rightSize+=20;
                    addOuterLine_Head('.p2b1', arr1[i][1],arr1[i][3]);
                    mapjoint[arr1[i][1]][3] = 1;
                }

                addOuterLine('.p2b1',icon1(arr1[i][6],1),arr1[i][2], arr1[i][4],arr1[i][5], arr1[i][6], arr1[i][7],arr1[i][3]);
            }
        }
        }

    } 
    
}
  
  
  
  
  //   addtext('.box5a', "0°-19°", "Flexion");
  var arr = [['joint'], ['muscle'], ['side'], ['movement'], ['movement data'], ['muscle data'] ];
  
  var arr5 =
  [ 

    // ['Wrist', 'Gluteus Maximus', 'Right', 'Flexsion', 0, 1595, 5, 60, 'Active', -1000],
    // ['Shoulder', 'Gluteus Maximus1', 'Right', 'Abduction5', 0, 1595, 5, -34, 'Active', -1000],
    // ['Elbow', 'Gluteus Maximus2', 'Right', 'Abduction', 0, 1595, 5, -34, 'Active', -1000],
    // ['Trunk', 'Gluteus Maximus3', 'Right', 'Abduction3', 0, 1595, 5, -34, 'Active', -1000],
    ['Wrist', 'Gluteus Maximus4', 'Right', 'Flexsion', 0, 1595, 5, -34, 'Active', -1000],
    ['Hip', 'Gluteus Maximus4', 'Left', 'Flexsion', 0, 1595, 5, -34, 'Active', -1000],
    // ['Hip', 'Gluteus Maximus2', 'Right', 'Abduction', 0, 1595, 5, -34, 'Active', -1000],
    // ['Knee', 'Gluteus Maximus3', 'Right', 'Abduction3', 0, 1595, 5, -34, 'Active', -1000],
    // ['Ankle', 'Gluteus Maximus4', 'Right', 'Flexsion', 0, 1595, 5, -34, 'Active', -1000],

    // ['Shoulder', 'Gluteus Maximus1', 'Left', 'Abduction', 0, 1595, 5, -34, 'Active', -1000],
    // ['Shoulder', 'Gluteus Maximus2', 'Left', 'Abduction3', 0, 1595, 5, -34, 'Active', -1000],
    // ['Shoulder', 'Gluteus Maximus3', 'Left', 'Flexsion', 0, 1595, 5, -34, 'Active', -1000],
    // ['Shoulder', 'Gluteus Maximus4', 'Right', 'Flexsion', 0, 1595, 5, -34, 'Active', -1000],
    
    // ['Knee', 'Gluteus Maximus', 'Right', 'Extension', 0, 1595, 5, 70, 'Active', -1000],
    // ['Elbow', 'Gluteus Maximus1', 'Right', 'Abduction1', 0, 1595, 5, -34, 'Active', -1000],
    // ['Elbow', 'Gluteus Maximus4', 'Right', 'Abduction2', 0, 1595, 5, -34, 'Active', -1000],
    // ['Elbow', 'Gluteus Maximus2', 'Right', 'Abduction3', 0, 1595, 5, -34, 'Active', -1000],
    // ['Elbow', 'Gluteus Maximus3', 'Right', 'Abduction4', 0, 1595, 5, -34, 'Active', -1000],
    // ['Elbow', 'Gluteus Maximus1', 'Left', 'Abduction1', 0, 1595, 5, -34, 'Active', -1000],
    // ['Elbow', 'Gluteus Maximus4', 'Left', 'Abduction2', 0, 1595, 5, -34, 'Active', -1000],
    // ['Elbow', 'Gluteus Maximus2', 'Left', 'Abduction3', 0, 1595, 5, -34, 'Active', -1000],
    // ['Elbow', 'Gluteus Maximus3', 'Left', 'Abduction4', 0, 1595, 5, -34, 'Active', -1000],
    // ['Lumbar', 'Gluteus Maximus4', 'Right', 'Lateral Flexsion1', 0, 1595, 5, -34, 'Active', -1000],
    // ['Lumbar', 'Gluteus Maximus5', 'Right', 'Lateral Flexsion2', 0, 1595, 5, -34, 'Active', -1000],
    // ['Lumbar', 'Gluteus Maximus5', 'Right', 'Lateral Flexsion3', 0, 1595, 5, -34, 'Active', -1000],
    // ['Lumbar', 'Gluteus Maximus1', 'Right', 'Lateral Flexsion4', 0, 1595, 5, -34, 'Active', -1000],

    // ['Lumbar', 'Gluteus Maximus4', 'Left', 'Lateral Flexsion1', 0, 1595, 5, -34, 'Active', -1000],
    // ['Lumbar', 'Gluteus Maximus5', 'Left', 'Lateral Flexsion2', 0, 1595, 5, -34, 'Active', -1000],
    // ['Lumbar', 'Gluteus Maximus2', 'Left', 'Lateral Flexsion3', 0, 1595, 5, -34, 'Active', -1000],
    // ['Lumbar', 'Gluteus Maximus1', 'Left', 'Lateral Flexsion4', 0, 1595, 5, -34, 'Active', -1000],


    // ['Wrist', 'Gluteus Maximus4', 'Right', 'Lateral Flexsion1', 0, 1595, 5, -34, 'Active', -1000],
    // ['Wrist', 'Gluteus Maximus5', 'Right', 'Lateral Flexsion2', 0, 1595, 5, -34, 'Active', -1000],
    // ['Wrist', 'Gluteus Maximus5', 'Right', 'Lateral Flexsion3', 0, 1595, 5, -34, 'Active', -1000],
    // ['Wrist', 'Gluteus Maximus1', 'Right', 'Lateral Flexsion4', 0, 1595, 5, -34, 'Active', -1000],

    // ['Wrist', 'Gluteus Maximus4', 'Left', 'Lateral Flexsion1', 0, 1595, 5, -34, 'Active', -1000],
    // ['Wrist', 'Gluteus Maximus5', 'Left', 'Lateral Flexsion2', 0, 1595, 5, -34, 'Active', -1000],
    // ['Wrist', 'Gluteus Maximus5', 'Left', 'Lateral Flexsion3', 0, 1595, 5, -34, 'Active', -1000],
    // ['Wrist', 'Gluteus Maximus1', 'Left', 'Lateral Flexsion4', 0, 1595, 5, -34, 'Active', -1000],

    // ['Hip', 'Gluteus Maximus4', 'Right', 'Lateral Flexsion1', 0, 1595, 5, -34, 'Active', -1000],
    // ['Hip', 'Gluteus Maximus5', 'Right', 'Lateral Flexsion2', 0, 1595, 5, -34, 'Active', -1000],
    // ['Hip', 'Gluteus Maximus5', 'Right', 'Lateral Flexsion3', 0, 1595, 5, -34, 'Active', -1000],
    // ['Hip', 'Gluteus Maximus1', 'Right', 'Lateral Flexsion4', 0, 1595, 5, -34, 'Active', -1000],
    
    // ['Hip', 'Gluteus Maximus4', 'Left', 'Lateral Flexsion1', 0, 1595, 5, -34, 'Active', -1000],
    // ['Hip', 'Gluteus Maximus5', 'Left', 'Lateral Flexsion2', 0, 1595, 5, -34, 'Active', -1000],
    // ['Hip', 'Gluteus Maximus5', 'Left', 'Lateral Flexsion3', 0, 1595, 5, -34, 'Active', -1000],
    // ['Hip', 'Gluteus Maximus1', 'Left', 'Lateral Flexsion4', 0, 1595, 5, -34, 'Active', -1000],

    // ['Knee', 'Gluteus Maximus4', 'Right', 'Lateral Flexsion1', 0, 1595, 5, -34, 'Active', -1000],
    // ['Knee', 'Gluteus Maximus5', 'Right', 'Lateral Flexsion2', 0, 1595, 5, -34, 'Active', -1000],
    // ['Knee', 'Gluteus Maximus5', 'Right', 'Lateral Flexsion3', 0, 1595, 5, -34, 'Active', -1000],
    // ['Knee', 'Gluteus Maximus1', 'Right', 'Lateral Flexsion4', 0, 1595, 5, -34, 'Active', -1000],

    // ['Knee', 'Gluteus Maximus4', 'Left', 'Lateral Flexsion1', 0, 1595, 5, -34, 'Active', -1000],
    // ['Knee', 'Gluteus Maximus5', 'Left', 'Lateral Flexsion2', 0, 1595, 5, -34, 'Active', -1000],
    // ['Knee', 'Gluteus Maximus5', 'Left', 'Lateral Flexsion3', 0, 1595, 5, -34, 'Active', -1000],
    // ['Knee', 'Gluteus Maximus1', 'Left', 'Lateral Flexsion4', 0, 1595, 5, -34, 'Active', -1000],

    // ['Ankle', 'Gluteus Maximus4', 'Right', 'Lateral Flexsion1', 0, 1595, 5, -34, 'Active', -1000],
    // ['Ankle', 'Gluteus Maximus5', 'Right', 'Lateral Flexsion2', 0, 1595, 5, -34, 'Active', -1000],
    // ['Ankle', 'Gluteus Maximus5', 'Right', 'Lateral Flexsion3', 0, 1595, 5, -34, 'Active', -1000],
    // ['Ankle', 'Gluteus Maximus1', 'Right', 'Lateral Flexsion4', 0, 1595, 5, -34, 'Active', -1000],

    // ['Ankle', 'Gluteus Maximus4', 'Left', 'Lateral Flexsion1', 0, 1595, 5, -34, 'Active', -1000],
    // ['Ankle', 'Gluteus Maximus5', 'Left', 'Lateral Flexsion2', 0, 1595, 5, -34, 'Active', -1000],
    // ['Ankle', 'Gluteus Maximus5', 'Left', 'Lateral Flexsion3', 0, 1595, 5, -34, 'Active', -1000],
    // ['Wrist', 'Gluteus Maximus1', 'Left', 'Lateral Flexsion4', 0, 1595, 5, -34, 'Active', -1000],
    // ['', 'Gluteus Maximus4', 'Left', 'Lateral Flexsion1', 0, 1595, 5, -34, 'Active', -1000],
    // ['Wrist', 'Gluteus Maximus4', 'Left', 'Lateral Flexsion1', 0, 1595, 5, -34, 'Active', -1000],
    // ['Wrist', 'Gluteus Maximus4', 'Left', 'Lateral Flexsion1', 0, 1595, 5, -34, 'Active', -1000],
    // ['Lumbar', 'Gluteus Maximus5', 'Right', 'Lateral Flexsion2', 0, 1595, 5, -34, 'Active', -1000],
    // ['Thoracic', 'Gluteus Maximus', 'Right', 'Lateral Flexsion3', 0, 1595, 5, -34, 'Active', -1000],
    // ['Abdomen', 'Gluteus Maximus', 'Right', 'Lateral Flexsion4', 0, 1595, 5, -34, 'Active', -1000],
    // ['Hip', 'Gluteus Maximus1', 'Left', 'Lateral Flexsion4', 0, 1595, 5, -34, 'Active', -1000],
    // ['Knee', 'Gluteus Maximus2', 'Left', 'Lateral Flexsion4', 0, 1595, 5, -34, 'Active', -1000],
    // ['Knee', 'Gluteus Maximus3', 'Right', 'Lateral Flexsion5', 0, 1595, 5, -34, 'Active', -1000],
    // ['Ankle', 'Gluteus Maximus4', 'Right', 'Lateral Flexsion4', 0, 1595, 5, -34, 'Active', -1000],
    // ['Ankle', 'Gluteus Maximus5', 'Right', 'Lateral Flexsion5', 0, 1595, 5, -34, 'Active', -1000],
    // ['Ankle', 'Gluteus Maximus6', 'Right', 'Lateral Flexsion7', 0, 1595, 5, -34, 'Active', -1000],
    // ['Ankle', 'Gluteus Maximus', 'Right', 'Lateral Flexsion8', 0, 1595, 5, -34, 'Active', -1000],


    

    // ['Hip', 'Gluteus Maximus', 'Right', 'Abduction', 0, 1595, 5, -34, 'Active', -1000]

    // ['Knee', 'Biceps', 'Right', 'Supination', 120, 1595, 5, -34, 'Active', -1000],
    // ['Ankle', 'Biceps', 'Right', 'Planter Flexion', 100, 1595, 5, -34, 'Active', -1000]
   
    
  ]
 
  var s2 = "Knee,Rectus Femoris,Right,Flexion,121,266,Knee,Vastus Medialis,Right,Extension,122,610,Knee,Gastrocnemius,Left,Flexion,124,851,Knee,Vastus Medialis,Left,Extension,124,283,Knee,Biceps Femoris,Left,Extension,111,1587,Knee,Biceps Femoris,Right,Extension,104,286,Hip,Gluteus Maximus,Right,Extension,15,434,Hip,Adductor Longus,Right,Adduction,7,459,Hip,Adductor Longus,Left,Abduction,0,1595,Hip,Gluteus Maximus,Left,Extension,13,25"

  function stringTodata(data)
  {
     
     var i =0;
     var arr = []
     while(i<data.length)
     {
        var arr1 = ["", "", "","", 0,0,0,0,""]
        var s1 = ""
        var count = 0;
          while(count<9 && i<data.length)
          {
              if(data[i]==',')
              {
                if(count< 4 || count == 8)
                {
                  arr1[count] = s1;
                }
                else 
                {
                  arr1[count] = parseInt(s1);
                }
                count++;
                s1 = "";
              }
              else 
              {
                s1 = s1+data[i];
              }

              i++;
          }
          arr.push(arr1);
     }
      return arr;
  }

  var element = document.getElementById("myElement");
  let outputValue = element.value;
  var elementone = document.getElementById("myElementone")
  let outputValueone = elementone.value;
  var elementtwo = document.getElementById("myElementwo")
  let outputValuetwo = elementtwo.value;
  

 
  arr5 = stringTodata(outputValue);

  var arr5 = add_normative_emg(arr5);

 
// outputValueone

report_new_kranthi(arr5, outputValueone, outputValuetwo); 
// secondPage();
// dotp
// dot_Visible(mapid['Trunk'][10]);
  