import React, { Component } from 'react';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textinput: '',
        }
    }
    onChange = (event) => {
        const value = event.target.value;
        this.setState({
            textinput: value,
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        const { addTodo } = this.props
        const { textinput } = this.state
        const todos = { name: textinput, status: false }
        addTodo(todos);
    }

    componentDidMount = (event) => {

        if (event === 'Enter' && this.state.textinput !== "") {
            // const newTodo = {
            //     id: Date.now(),
            //     text: this.state.textinput,
            //     status: false
            // };
            this.setState({
                textinput: '',
            })
            //this.setState({ todos: [...todos, newTodo], inputValue: '' });
        }
        if (event === 'Enter' && this.state.textinput === "") {
            alert("Bạn chưa nhập nội dung công việc")
        }



    }
    render() {
        const textinput_1 = this.state.textinput;

        return (
            <>
                <div>
                    <h1 id='todos'>todos</h1>
                    <form className='form'>
                        <input value={textinput_1} onChange={this.onChange} onKeyDown={this.onSubmit} placeholder='Nhập nội dung công việc...'></input>
                    </form>
                </div>
            </>
        )
    }

}
export default Header;