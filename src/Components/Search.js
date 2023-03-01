import React, { Component } from "react";

export default class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			input: "",
			field: "title",
		};
	}
	handleOnChange = (e) => {
		const { name, value } = e.target;
		this.setState(
			{
				[name]: value,
			},
			() => {
				this.props.handleSearch(this.state.input, this.state.field);
			}
		);
	};
	render() {
		return (
			<div>
				<form>
					<label>Search:</label>
					<input
						name="input"
						value={this.state.input}
						onChange={this.handleOnChange}
						placeholder="search input..."
					/>
					<br />
					Search Field:
					<label htmlFor="title">Title</label>
					<input
						onChange={this.handleOnChange}
						value="title"
						name="field"
						type="radio"
						checked={this.state.field === "title"}
					/>
					<label htmlFor="director">Director</label>
					<input
						onChange={this.handleOnChange}
						value="director"
						name="field"
						type="radio"
						checked={this.state.field === "director"}
					/>
					<br />
				</form>
			</div>
		);
	}
}
