import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tw from 'nativewind';

const ButtonGroup = ({ buttons, onPress }) => {

  return (
    <View style={tw`flex flex-row justify-around`}>
      {buttons.map((button, index) => (
        <TouchableOpacity
          key={index}
          style={tw`px-4 py-2 rounded-md ${
            button.selected ? `bg-${button.color}-500` : 'bg-gray-300'
          }`}
          onPress={() => onPress(button)}
        >
          <Text
            style={tw`text-white font-semibold ${
              button.selected ? `text-white` : 'text-gray-700'
            }`}
          >
            {button.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ButtonGroup;
