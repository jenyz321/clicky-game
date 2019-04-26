import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0,

  };

  // gameOver = () => {
  //   if (this.state.score > this.state.highscore) {
  //     this.setState({ high45
  //   this.state.friends.forEach(card => {
  //     card.count = 0;
  //   });
  //   alert("Game Over");
  //   this.setState({ score: 0 });
  //   return true;
  // }
  incrementScore = id => {
    console.log(id);
    this.setState({ score: this.state.score + 1 });
  }



    // removeFriend = id => {
    //   // Filter this.state.friends for friends with an id not equal to the id being removed
    //   const friends = this.state.friends.filter(friend => friend.id !== id);
    //   // Set this.state.friends equal to the new friends array
    //   this.setState({ friends });
    // };

    // Map over this.state.friends and render a FriendCard component for each friend object
    render() {
      console.log(this.state.score);
      return (
        <Wrapper>
          <Title>Downton Abbey Clicky Game</Title>
          <h1>Score: {this.state.score}</h1>
          {this.state.friends.map(friend => (
            <FriendCard
              incrementScore={this.incrementScore}
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
            // occupation={friend.occupation}
            // location={friend.location}
            />
          ))}
        </Wrapper>
      );
    }
}



  export default App;
