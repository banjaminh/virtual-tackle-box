import { Text, TextInput, View, TouchableOpacity } from "react-native";

import { styles } from "./LureFormStylesheet";

export default function AddFish({ formData, updateForm, sendLureToApi }) {
	return (
		<View style={styles.container}>
			<Text style={styles.formHeader}>Lure Details</Text>

			<Text style={styles.labels}>Brand</Text>
			<TextInput
				label="Brand"
				placeholder="Brand"
				style={styles.input}
				value={formData.brand}
				onChangeText={(text) => updateForm("brand", text)}
			/>

			<Text style={styles.labels}>Variety</Text>
			<TextInput
				label="Variety"
				placeholder="Variety"
				style={styles.input}
				value={formData.variety}
				onChangeText={(text) => updateForm("variety", text)}
			/>

			<Text style={styles.labels}>Color</Text>
			<TextInput
				label="Color"
				placeholder="Color"
				style={styles.input}
				value={formData.color}
				onChangeText={(text) => updateForm("color", text)}
			/>

			<Text style={styles.labels}>Weight</Text>
			<TextInput
				keyboardType="numeric"
				label="Weight"
				placeholder="Weight"
				style={styles.input}
				value={formData.weight}
				onChangeText={(text) => updateForm("weight", text)}
			/>

			<TouchableOpacity onPress={()=> sendLureToApi()} style={styles.submitButton}>
				<Text style={{ fontSize: 24 }}>Submit</Text>
			</TouchableOpacity>
		</View>
	);
}