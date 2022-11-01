import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';

export default class App extends Component {
  state = {
    currentEmoji: require('./assets/emoji/love.png'),
  };

  datas = [
    require('./assets/emoji/angry.png'),
    require('./assets/emoji/care.png'),
    require('./assets/emoji/haha.png'),
    require('./assets/emoji/like.png'),
    require('./assets/emoji/love.png'),
    require('./assets/emoji/sad.png'),
  ];

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
          {this.datas.map((emoji, index) => {
            return (
              <TouchableOpacity onPress={() => this._onClickChangeEmoji(emoji)}>
                <Image style={styles.emoji} source={emoji} />
              </TouchableOpacity>
            );
          })}
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
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
  },
  emoji: {
    width: 34,
    height: 34,
    margin: 8,
  },
});
