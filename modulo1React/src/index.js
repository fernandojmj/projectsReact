import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import Header from './components/header';
import Post from './components/post';

import style from './style.scss';

class App extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    this.setState({
      posts: this.obterPosts(),
    });
    console.log(this.state.posts);
  }

  obterPosts() {
    const posts1 = [
      {
        id: 1,
        name: 'Diego Fernandes',
        avatar: 'https://avatars0.githubusercontent.com/u/2254731?s=460&v=4',
        time: 'há 3 min',
        body:
          'Pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum. asdasdasdasdasdasdasdasdssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss',
      },
      {
        id: 2,
        name: 'Rocketseat',
        avatar: 'https://avatars0.githubusercontent.com/u/2254731?s=460&v=4',
        time: 'há 30 min',
        body:
          'Pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum. asdasdasdasdasdasdasdasdssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss',
      },
      {
        id: 3,
        name: 'Fernando',
        avatar: 'https://avatars0.githubusercontent.com/u/2254731?s=460&v=4',
        time: 'há 30 min',
        body:
          'Pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum. asdasdasdasdasdasdasdasdssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss',
      },
    ];
    return posts1;
  }

  render() {
    const { posts } = this.state;
    return (
      <Fragment>
        <Header />

        {posts && posts.map(post => <Post key={post.id} data={post} />)}
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
