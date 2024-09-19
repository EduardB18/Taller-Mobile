import React, { useState } from "react";

import {
View,
TextInput,
Alert,
Text,
StyleSheet,
TouchableOpacity,
ActivityIndicator
} 
from "react-native";

export const  RegisterFormWithMessage =() => {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");

const [errors, setErrors] = useState ({ name: "", email: "", message: "" });

const [loading, setLoading] = useState(false);
    const [exito, setExito] = useState("");


const validate = () => {
    let valid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (!name){
        newErrors.name = "Un nombre es requerido";
        valid = false;
    }

    if (!email){
        newErrors.email = "Un email es requerido";
        valid = false;
    }else if(!/\S+@\S+\.\S+/.test(email)){
        newErrors.email = "Un email es requerido";
        valid = false;
    }

    if (!message) {
        newErrors.message = "Debes ingresar un mensaje...";
        valid = false;
    } else if (message.length < 15) {
        newErrors.message = "El mensaje debe contener al menos 15 letras";
        valid = false;
    }

    setErrors(newErrors);
        return valid;
} ;

const handleSubmit = () => {
    if (validate()) {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setExito(`Éxito al ingresar `);
            setName('');
            setEmail('');
            setMessage('');
           
        }, 2000);
    }
};

return (
    <View style={styles.container}>
        <TextInput
            style={styles.entrada}
            placeholder="Nombre:"
            value={name}
            onChangeText={setName}
        />
        {errors.name && <Text style={styles.error}>{errors.name}</Text>}

        <TextInput
            style={styles.entrada}
            placeholder="Correo electrónico: "
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
        />
        {errors.email && <Text style={styles.error}>{errors.email}</Text>}

        <TextInput
            style={styles.texto}
            placeholder="Mensaje:"
            value={message}
            onChangeText={setMessage}
            multiline
            numberOfLines={4}
        />
        {errors.message && <Text style={styles.error}>{errors.message}</Text>}

        {loading ? (
            <ActivityIndicator size="large" color="#FF0000" />
        ) : (
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttondef}>|| Enviar ||</Text>
        </TouchableOpacity>
        )}
        {exito ? <Text style={styles.Exito}>{exito}</Text> : null}
    </View>
);
};

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
},
 entrada: {
    fontFamily: 'Italic', 
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
},
texto: {
    fontFamily: 'Arial', 
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    height: 100,
    textAlignVertical: 'top',
},
error: {
    fontFamily: 'Italic', 
    color: '#DBF227',
    marginBottom: 15,
    fontSize: 16,
}, 
button: {
    width: '100%',
    backgroundColor: '008f39',  
    paddingVertical: 20,         
    paddingHorizontal: 20,      
    borderRadius: 25,            
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,                
  },
  buttondef: {
    color: '#0a0a0a',               
    fontSize: 24,                
    fontWeight: 'bold',          
    letterSpacing: 1,          
  },
  Exito: {
    fontFamily: 'Arial',
    color: '#FFD700',
    marginTop: 10,
    fontSize: 18,
    textAlign: 'center',
},

});
