import { View, Text, TouchableOpacity, Image } from 'react-native'

const CategoryCard = ({imgUrl,title}) => {
  return (
    <TouchableOpacity className='mr-2 relative'>
        <Image
            source={{uri:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80'}}
            className='h-20 w-20 rounded'
        />
      <Text className='absolute bottom-1 left-1 text-white font-bold'>{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard