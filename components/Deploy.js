import * as React from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import { Card, Button,Icon } from 'react-native-elements'

export default function DP() {

    const data = [
        {title:"Introduction",para:"What's the point of developing something cool and not deploy it for people to see and use. It doesn't matter what you build, but it does whether you put it out for the world to see your work or not! I have always believed that developing even a small app without deployment is a waste of time and human effort.  Therefore, In this tutorial, We will briefly discuss the steps to take to deploy the ReactNative app. \n\nAlthough we can deploy the ReactNative app on the App Store and Play Store, here we will only look at the steps to deploy the app on Google Play Store. So without wasting any more second, let us get started.\n\nThere are a few things that we need to do before getting started deploying the app on the play store (Just the information and screenshots of the app before uploading it to the play store). These things are as follows- \n\n1. Name of the App\n\n2. Short Description\n\n3. Logo (1024X1024 px) and (512x512 px)\n\n4. Long Description\n\n5. What is new? Text\n\n6. Keywords \n\n7. Screenshots\n\n8. Bundle Identifier\n\n9. Publisher Information like Name, Organization Name, City, email, etc. \n\nAfter collecting all the information, we are ready to pack our app into a bundle or .ipa file .\n"},
        {title:"Generate apk, aab, and .ipa",para:"If you have come this far, then Congrats. If you want me to add this tutorial, I request you to Star this repository or follow me on Twitter.\n\nIf I get 100 stars on Github, then I will update the app, fix performance issues, and deploy the app on Google Play Store and Apple App Store. \n\nGithub Link: \nhttps://github.com/karanjagota/ReactNative-Tutor\n\nTwitter Link: \nhttps://twitter.com/IamKaranJagota\n"}
       
    ]

    return (
      <ScrollView>
       <Card>
              <Card.Title style={{color:'#6C63FF'}}>Deploying React Native App</Card.Title>
                  <Card.Divider/>
                <Card.Image resizeMode='cover' source={require('../assets/raw_images/start.png')} />             
              </Card>
           {data.map((obj)=>
            <Card key={obj.title}>
                  <Card.Title style={{textAlign:'left',color:'#6C63FF'}}>{obj.title}</Card.Title>
                  <Card.Divider/>
                  <View>
                  <Text style={{fontSize:16,textAlign:'justify'}}>{obj.para}</Text>
                  </View>                 
              </Card>
           )}
    </ScrollView>
    );
  }