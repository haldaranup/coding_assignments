export const Button = ({ colorScheme, variant, size="md"}) => {
  let s = {height: "40px" , width:"80px"}
    if(size === "sm"){
       s.height= "30px" 
       s.width= "60px"
      }
  
      if(size === "lg"){
        s.height= "40px" 
        s.width= "80px"
       }
  
       if(size === "xl"){
        s.height= "100px" 
        s.width= "200px"
       }
    return <button style={{color: colorScheme, height: s.height, width: s.width, border: variant}}>Hello</button>;
  };
  