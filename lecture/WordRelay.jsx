const React = require('react');
const { Component } = React;

class WordRelay extends Component {
    state = {
        word: '조르바',
        value: '',
        result: '',
    }
    
    onSubmitForm = (e) => {
        e.preventDefault();
        if (this.state.word[this.state.word.length-1] === this.state.value[0]) {
            this.setState({
                word: this.state.value,
                value: '',
                result: '딩동댕',
            })
            this.input.focus()
        } else {
            this.setState({
                result: '땡',
                value: ''
            })
            this.input.focus()
        }
    }

    onChangeInput = (e) => {
        this.setState({ value: e.target.value })
    }

    input;

    onRefInput = (c) => {
        this.input = c;
    }


    render() {
        console.log('렌더링')
        return (
            <>
                <div>{this.state.word}</div>
                    <form onSubmit={this.onSubmitForm}>
                        <input ref={this.onRefInput} value={this.state.value} onChange={this.onChangeInput} />
                        <button>입력!</button>
                    </form>
                    {this.state.result}
                <div></div>
            </>
        )
    }
}

module.exports = WordRelay;