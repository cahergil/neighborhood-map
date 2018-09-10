export const loadGoogleMap = (callback) => {

 const existingScript = document.getElementById('googleMaps');
 if(!existingScript) {

     const script = document.createElement('script');
     const apiKey = 'AIzaSyDlAvOeTTibT3teJx7iBKpol1Y3P7TizQs';
     script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3`;
     script.id ='googleMaps';
     script.onload = () => {
         console.log('Successfuly loaded ',script.src);
         if(callback) callback();
     };
     script.onerror = () => {
         console.log('Could not load script ', script.src);
         // console.log(error);
         const error = "error trying to load google maps script"
         if(callback) callback(error)
     }
     document.body.appendChild(script);


 }



}
