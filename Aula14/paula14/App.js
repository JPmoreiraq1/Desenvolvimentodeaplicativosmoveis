import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { useVideoPlayer, VideoView } from 'expo-video';

const fonte = require('./src/assets/videos/video.mp4');

export default function App() {
  const playerConf = useVideoPlayer(fonte, (player) => {
    player.play();
    player.loop = true;
  });

  return (
    <View style={styles.container}>
      <VideoView
        style={styles.video}
        player={playerConf}
        nativeControls
      />

      <TouchableOpacity>
        
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#de1414',
    alignItems: 'center',
    justifyContent: 'center',
  },

  video: {
    width: '90%',
    height: 400,
  },
});