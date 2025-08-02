import { Box, Button, Heading, Image, LinkBox, Text,Link } from '@chakra-ui/react'
import { toText } from 'object-to-text'
import React from 'react'
import { useState } from 'react'
// import { Redirect, useHref } from 'react-router-dom'
// import { useNavigate, useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
// import { SindleItem } from '../Homepage/SindleItem'
// import { Navbar } from '../Navbar/Navbar'

export const Cart = () => {

const [cartData ,setCart] = useState(JSON.parse(localStorage.getItem("cxcart")))



const handleRemove = (item,ind) =>{

 cartData.splice(ind,1)
 
  localStorage.setItem("cxcart",JSON.stringify(cartData))

  setCart(JSON.parse(localStorage.getItem("cxcart")))

}



const [c,setC] = useState(0)

const handlePlus =(item)=>{
        
item.count = item.count+1
localStorage.setItem("cxcart",JSON.stringify(cartData))
setC(p=>p+1)
}
const handleMinus =(item)=>{
    
    if(item.count>1)  
item.count = item.count-1
localStorage.setItem("cxcart",JSON.stringify(cartData))
setC(p=>p+1)
}



let total = cartData.reduce((sum,el)=>{
    let a = Number(el.price) * Number(el.count)
    return sum = sum+ a
},0)



// Crear un mensaje más detallado con información de los productos
let text = "🍽️ *PEDIDO - Visual Castle Restaurant*\n"
text += "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n"
text += cartData.map((item, index) => {
  const subtotal = Number(item.price) * Number(item.count)
  return `${index + 1}. *${item.name}*\n   📦 Cantidad: ${item.count}\n   💰 Precio unitario: Q.${item.price}\n   💵 Subtotal: Q.${subtotal}\n   🖼️ Imagen: ${item.img}\n`
}).join('\n')
text += "\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n"
text += `💰 *TOTAL A PAGAR: Q.${total}*\n\n`
text += "📍 *Visual Castle Restaurant*\n"
text += "📞 +502 4889-6134\n"
text += "🕒 Horario: Lunes a Domingo\n"
text += "🚚 *Servicio a domicilio disponible*"

// console.log(total)
// console.log(text)

const handleWhatsBtn = ()=>{

    localStorage.setItem("cxcart",JSON.stringify([]))
    setTimeout(()=>{
        setCart(JSON.parse(localStorage.getItem("cxcart")))
    },3000)
    
    // setC(p=>p+1)
}



  return (
<Box  display={"flex"} flexDirection="column"  p="20px" justifyContent="center" >
  <NavLink to="/"><Button colorScheme="blue" >Back to home</Button></NavLink>
  <Box >
      <Box p="50px">
        <Heading textAlign={"center"} align="center" fontSize={"50px"}>Cart</Heading>
      </Box>

      <Box
        //    border={"1px solid red"}
        display="grid"
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(3,1fr)",
          xl: "repeat(3,1fr)",
          "2xl": "repeat(4,1fr)",
        }}
        alignItems="center"
        justifyContent={"center"}
        // border="1px solid red"
        w="100%"
        gap="20px"
      >
        {cartData.map((el, ind) => {
          return (
            <Box display={"flex"} w="100%" alignItems="center" justifyContent={"space-between"} key={ind} shadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" >
            <Box w="40%"  >
                <Image w="100%" src={el.img} />
              </Box>

              <Box
              w="60%"
                // mt="10px"
                display={"flex"}
                flexDirection="column"
                // justifyContent="space-between"
                alignItems={"center"}
              >
                <Text fontWeight={"500"} fontSize="20px">
                  {el.name}
                </Text>
                <Text fontWeight={"500"}>{el.qty}</Text>
                <Text color="#3182ce" fontWeight={"900"} fontSize="17px">
                   Q.{el.price}
                </Text>

             <Box
             display={"flex"}
            //  border="1px solid red"
             alignItems={"center"}
             justifyContent="space-around"
             >
                <Button colorScheme="red" display={"flex"} alignItems={"center"} justifyContent="center" h="20px" onClick={()=>{handleMinus(el)}} >-</Button>
                <Text  fontWeight={"900"} fontSize="18px"m="10px" >{el.count}</Text>
                <Button colorScheme="yellow" display={"flex"} alignItems={"center"} justifyContent="center"  h="20px" onClick={()=>{handlePlus(el)}} >+</Button>
             </Box>

                <Button
                  mt="5px"
                  mb="5px"
                  border={"1px solid black"}
                  bg="white"
                  _hover={{
                    bg: "#3182ce",
                    color: "white",
                    border: "1px solid white",
                  }}
                  onClick={()=>{handleRemove(el,ind)}}
                >
                 Remove
                </Button>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>

   <Box border={"1px  black"} w="100%" mt={"100px"}>

<Box w={{base:"",sm:"",md:"",lg:"30%",xl:"40%"}} m= "auto"  border={"1px  red"} >
  <Heading>Bill Summary</Heading>
  <Text lineHeight={"40px"} fontWeight={"500"} >{text}</Text>
</Box>


       <Link  style={{textDecoration:"none"}} target={"blank"} href={`https://wa.me/+50248896134?text=${text}`} >
   <Button margin={"20px"}
    colorScheme={"green"}
    onClick={handleWhatsBtn} 
   target={"blank"} 
   >Ordenar en WhatsApp
   
   </Button>
</Link>
   </Box>
</Box>
  )
}
