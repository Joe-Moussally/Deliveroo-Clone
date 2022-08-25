import { View, Text, ScrollView } from 'react-native'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

const Featured = ({id,title,description}) => {
  return (
    <View>
      
        <View className='mt-4 flex-row items-center justify-between px-4'>
            <Text className='font-bold text-lg'>{title}</Text>
            <ArrowRightIcon color='#00CCBB'/>
        </View>

        <Text className='text-xs text-gray-500 px-4'>{description}</Text>

        <ScrollView
            horizontal
            contentContainerStyle={{
                paddingHorizontal:15,
            }}
            showsHorizontalScrollIndicator={false}
            className='pt-4'
        >
            {/* Restaurant Cards */}
            <RestaurantCard
                id={123}
                imgUrl='https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
                title='Yolo Sushi'
                rating={4.5}
                genre='Japanese'
                address='123 Main St'
                short_description='This is a short description'
                dishes={[]}
                long={-115.7507}
                lat={37.6460}
            />
                        <RestaurantCard
                id={123}
                imgUrl='https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
                title='Yolo Sushi'
                rating={4.5}
                genre='Japanese'
                address='123 Main St'
                short_description='This is a short description'
                dishes={[]}
                long={-115.7507}
                lat={37.6460}
            />
                        <RestaurantCard
                id={123}
                imgUrl='https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
                title='Yolo Sushi'
                rating={4.5}
                genre='Japanese'
                address='123 Main St'
                short_description='This is a short description'
                dishes={[]}
                long={-115.7507}
                lat={37.6460}
            />
        </ScrollView>

    </View>
  )
}

export default Featured