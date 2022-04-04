import React, { Component } from 'react'
import axios from 'axios'
import Main from '../template/Main'

// Cabeçalho do cadastro
const headerProps = {
    icon: "users",
    title: "Faça seu cadastro",
    subtitle: "Preencha o formulário abaixo "
}

// Dados do usuário que aparecerão no server
const baseUrl = 'http://localhost:3001/users'
const initialState = {
    user: { name: '', email: '', number: '', birthDate: '', descrevaSeuProblema: '' },
    list: []
}

export default class UserCrud extends Component {

    // Iniciando cadastro do usuário
    state = { ...initialState }

    // Limpando formulário
    clear() {
        this.setState({ user: initialState.user })
    }

    // Salvando formulário  (user)  
    save() {
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
        axios[method](url, user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ user: initialState.user, list })
            })
    }

    // Atualizando a lista
    getUpdatedList(user) {
        const list = this.state.list.filter(u => u.id !== user.id)
        list.unshift(user)
        return list
    }

    // Atualizando campo do formulário
    updateField(event) {
        const user = { ...this.state.user }
        user[event.target.name] = event.target.value
        this.setState({ user })
    }
    //  Preenchimento do formulário e botões
    renderForm() {
        return (
            <div className='form'>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className='form-control'
                                name="name"
                                value={this.state.user.name}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o seu nome..." />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>E-mail</label>
                            <input type="text" className='form-control'
                                name="email"
                                value={this.state.user.email}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o seu e-mail..." />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Telefone para contato</label>
                            <input type="text" className='form-control'
                                name="number"
                                value={this.state.user.number}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o seu telefone aqui..." />
                        </div>
                    </div>
                    <div className="col-12 col-md-6" >
                        <div className="form-group">
                            <label for="data">Data de Nascimento</label>
                            <input type="date" className='form-control' />
                        </div>
                    </div>
                    <div className="col-12 col-md-12" >
                        <div className="form-group">
                            <label>Qual o seu objetivo na academia ?</label>
                            <input type="text" className='form-control'
                                name="descrevaSeuObjetivo"
                                value={this.state.user.descrevaSeuObjetivo}
                                onChange={e => this.updateField(e)}
                                placeholder="Descreva o seu objetivo..." />
                        </div>

                    </div>
                </div>

                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary"
                            onClick={e => this.save(e)}>
                            Salvar
                        </button>

                        <button className="btn btn-secondary ml-2"
                            onClick={e => this.clear(e)}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <Main {...headerProps}>
                {this.renderForm()}
            </Main>
        )
    }
}