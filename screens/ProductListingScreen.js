import { useEffect, useState } from "react";
import { View, Text, SafeAreaView, FlatList, StyleSheet, Image, ActivityIndicator, ScrollView} from "react-native";

const ProductListingScreen =  () => {
    const [products, setProducts] =  useState([])   
useEffect(() => {
    getProducts();
}, [])
const [isLoading , setIsLoading] = useState(true)
const [error , setError] = useState(null)
    const getProducts= () => {
        const URL = 'https://fakestoreapi.com/products'
        fetch(URL)
      .then((res) => {
        if(!res.ok) {
            throw new Error("Something went wrong");

        }
         return res.json();// this convert into the readable format


      })
      .then ((data) => {
        setProducts(data)
        setIsLoading(false)
        console.log(data)
      })
      .catch((error) => {
        setError(error.message)
        setIsLoading(false)
        console.log(error.message)
      })
    }


    return (
        
        <View>
            <ScrollView>
            <Text>FETCHING THE DATA</Text>
            {isLoading ? (
                <ActivityIndicator size='large' color='red'/>
            ): error ? <Text>{error}</Text>:(
                <FlatList
                showsVerticalScrollIndicator={false}
                data={products}
                renderItem={({item}) => (
               <View style= {styles.cardContainer}>
               <Image source={{uri: item.image}} style = {styles.Image} />
               <Text style= {{fontSize: 18, textAlign: 'center', color:'blue'}} >{item.id} </Text>
               <Text style= {{fontSize: 18, textAlign: 'center'}} >{item.price} </Text>
               <Text style= {{fontSize: 18, textAlign: 'center', color:'blue'}} >{item.title} </Text>
               <Text style= {{fontSize: 18, textAlign: 'center', color:'black'}} >{item.description} </Text>
               
                  </View>
      )}
                />
            )}
     
            
     </ScrollView>        
        </View>
    )

}
export default ProductListingScreen
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'plum',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 60, 
    
    },
    Image: {
height: 100,
width:100,

    },
    cardContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        marginTop: 20,
    },
    errorStyle: {
        color: 'red',
        fontSize: 18,

    }

   
  });