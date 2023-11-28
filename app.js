var numberInc = document.getElementById("number")

const showContent = (contentId) => {
    var contents = document.getElementsByClassName('selected_column');
    for (var i = 0; i < contents.length; i++) {
        contents[i].style.display = 'none';
        
    }

    var selectedContent = document.getElementById(contentId);
    if (selectedContent.style.display === 'block') {
        selectedContent.style.display = 'none';
        
    }
    else{
      selectedContent.style.display = 'block';
    
    }
    
}
const show_guided = () => {
      var element= document.getElementById('guide')
      element.style='display:block';
      
      var up_icon= document.getElementById('icon_up')
      up_icon.style='display:block';
      
      var down_icon= document.getElementById('icon_down')
      down_icon.style='display:none';
}

const icon_upp = () => {
      var element= document.getElementById('guide')
      element.style='display:none';
      
      var up_icon= document.getElementById('icon_up')
      up_icon.style='display:none';
      
      var down_icon= document.getElementById('icon_down')
      down_icon.style='display:block';
}
const inputing = (change) => {
  var rangeInput = document.getElementById("rangeInput");
  var icon = document.getElementById('styrl');
  if (icon.style.display === 'block') {
    icon.style.display = 'none';
  } else {
    icon.style.display = 'block';
    document.getElementById('checky').style.border = '3px solid black'
    currentValue = parseInt(change);
    document.getElementById('increase').innerText = `${currentValue}`;

    var newValue = 25; 
    rangeInput.value = newValue;
    updateButtonValue();

  }

  }


const inputing_2 = (change) => {

  var rangeInput = document.getElementById("rangeInput");
  var icon_2 = document.getElementById('styrl_2');
  if (icon_2.style.display === 'block') {
    icon_2.style.display = 'none';
    
  } else {
    icon_2.style.display = 'block';
    document.getElementById('checky1').style.border = '3px solid black'
    currentValue += parseInt(change);
    document.getElementById('increase').innerText = `${currentValue}`;

    rangeInput.value =  50; 
    updateButtonValue();
  }
}

const inputing_3 = (change) => {

  var rangeInput = document.getElementById("rangeInput");
  var icon_3 = document.getElementById('styrl_3');
  if (icon_3.style.display === 'block') {
    icon_3.style.display = 'none';
  } else {
    icon_3.style.display = 'block';
    document.getElementById('checky2').style.border = '3px solid black'
    currentValue += parseInt(change);
    document.getElementById('increase').innerText = `${currentValue}`;

    var newValue2 = 70; 
    rangeInput.value += newValue2;
    updateButtonValue();
  }
}

const inputing_4 = (change) => {

  var rangeInput = document.getElementById("rangeInput");
  var icon_4 = document.getElementById('styrl_4');
  if (icon_4.style.display === 'block') {
    icon_4.style.display = 'none';
  } else {
    icon_4.style.display = 'block';
    document.getElementById('checky3').style.border = '3px solid black'
    currentValue += parseInt(change);
    document.getElementById('increase').innerText = `${currentValue}`;

    var newValue = 80; 
    rangeInput.value = newValue;
    updateButtonValue();

  }
}
const inputing_5 = (change) => {

  var rangeInput = document.getElementById("rangeInput");
  var icon_5 = document.getElementById('styrl_5');
  if (icon_5.style.display === 'block') {
    icon_5.style.display = 'none';
  } else {
    icon_5.style.display = 'block';
    document.getElementById('checky4').style.border = '3px solid black'
    currentValue += parseInt(change);
    document.getElementById('increase').innerText = `${currentValue}`;

    var newValue = 100; 
    rangeInput.value = newValue;
    updateButtonValue();
  }
}


const dropdownBtn =  () => {
  document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

const dropdownBtn1 =  () => {
  document.getElementById("myDropdown1").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn1')) {
    var dropdowns = document.getElementsByClassName("dropdown-content1");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show1')) {
        openDropdown.classList.remove('show1');
      }
    }
  }
}

