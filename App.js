import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';

export default class App extends Component {
  state = {
    currentEmoji: require('./assets/emoji/love.png'),
  };

  _onClickChangeEmoji = currentEmoji => {
    this.setState({
      currentEmoji,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>How are you feeling?</Text>
        <Image style={styles.currentEmoji} source={this.state.currentEmoji} />
        <View style={styles.emojiListContainer}>
          <TouchableOpacity
            onPress={() =>
              this._onClickChangeEmoji(require('./assets/emoji/angry.png'))
            }>
            <Image
              style={styles.emoji}
              source={require('./assets/emoji/angry.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              this._onClickChangeEmoji(require('./assets/emoji/care.png'))
            }>
            <Image
              style={styles.emoji}
              source={require('./assets/emoji/care.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              this._onClickChangeEmoji(require('./assets/emoji/haha.png'))
            }>
            <Image
              style={styles.emoji}
              source={require('./assets/emoji/haha.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              this._onClickChangeEmoji(require('./assets/emoji/like.png'))
            }>
            <Image
              style={styles.emoji}
              source={require('./assets/emoji/like.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              this._onClickChangeEmoji(require('./assets/emoji/love.png'))
            }>
            <Image
              style={styles.emoji}
              source={require('./assets/emoji/love.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              this._onClickChangeEmoji(require('./assets/emoji/sad.png'))
            }>
            <Image
              style={styles.emoji}
              source={require('./assets/emoji/sad.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 21,
    padding: 10,
  },
  currentEmoji: {
    width: 125,
    height: 125,
    border: '5px solid #555',
    margin: 20,
  },
  emojiListContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emoji: {
    width: 34,
    height: 34,
    margin: 8,
  },
});
