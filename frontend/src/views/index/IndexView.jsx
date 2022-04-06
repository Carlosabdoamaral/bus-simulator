import './IndexStyles.scss'
import axios from "axios";
import {useEffect} from "react";

export default function IndexView() {
    let date = new Date()
    let dayFormated = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`

    useEffect( () => {
        request()
    })

    const request = () => {
        axios.get('http://127.0.0.1:5000/')
            .then((res) => {
                let listRef = document.querySelector('#list')
                let objLength = res.data['down_new_arr'].length

                for (let i = 0; i < objLength; i++) {
                    let down_old_arr = res.data['down_old_arr']
                    let down_new_arr = res.data['down_new_arr']
                    let up_new_arr = res.data['up_new_arr']
                    let up_old_arr = res.data['up_old_arr']

                    let up_diff = res.data['up_diff']
                    let down_diff = res.data['down_diff']

                    let status = ''
                    let status_class = ''

                    let d_o = down_new_arr[i - 1]
                    let d_n = down_new_arr[i]
                    let u_o = up_new_arr[i - 1]
                    let u_n = up_new_arr[i]

                    if (i === 0) {
                        d_o = 0
                        u_o = 0
                    } else if (i === objLength - 1) {
                        d_n = 0
                        u_n = 0
                    }

                    if (d_n === 40 && u_n === 20) {
                        status = 'Cheio'
                        status_class = 'full'
                    } else if (d_n === 0 && u_n === 0) {
                        status = 'Vazio'
                        status_class = 'empty'
                    } else {
                        status = 'Normal'
                        status_class = 'normal'
                    }

                    let item = document.createElement('div')
                    item.className = 'item-list'
                    item.innerHTML = `
                <p class="top-list-id">${i}</p>
                <p class="top-list-stats ${status_class}">${status}</p>
                <p class="top-list-down">${d_o} -> ${d_n}</p>
                <p class="top-list-up">${u_o} -> ${u_n}</p>
                <p class="top-list-diff">${down_diff[i]}</p>
                <p class="top-list-diff">${up_diff[i]}</p>
               
            `

                    listRef.appendChild(item)
                }
            })
    }

    return (
        <main className={"content"}>
            <div className={"dashboard"}>
                <h1 className={"large-title"}>Painel de controle</h1>
                <small className={"by"}>Por: Carlos Alberto Barcelos do Amaral</small>

                <div className={"horizontal-list"}>
                    {/*<div className={"square"}>*/}
                    {/*    <div>*/}
                    {/*        <p>Total de passageiros</p>*/}
                    {/*        <h2>100.002</h2>*/}
                    {/*    </div>*/}

                    {/*    <small>Analisado em {dayFormated}</small>*/}
                    {/*</div>*/}

                    {/*<div className={"square"}>*/}
                    {/*    <div>*/}
                    {/*        <p>Total de passageiros</p>*/}
                    {/*        <h2>100.002</h2>*/}
                    {/*    </div>*/}

                    {/*    <small>Analisado em {dayFormated}</small>*/}
                    {/*</div>*/}

                    {/*<div className={"square"}>*/}
                    {/*    <div>*/}
                    {/*        <p>Total de passageiros</p>*/}
                    {/*        <h2>100.002</h2>*/}
                    {/*    </div>*/}

                    {/*    <small>Analisado em {dayFormated}</small>*/}
                    {/*</div>*/}

                    {/*<div className={"square"}>*/}
                    {/*    <div>*/}
                    {/*        <p>Total de passageiros</p>*/}
                    {/*        <h2>100.002</h2>*/}
                    {/*    </div>*/}

                    {/*    <small>Analisado em {dayFormated}</small>*/}
                    {/*</div>*/}
                </div>

                <div className={"data"}>
                    <div className={"vertical-list"}>
                        <div className={"top-list"}>
                            <p className={"top-list-id"}>#</p>
                            <p className={"top-list-stats"}>Status</p>
                            <p className={"top-list-down"}>Sentadas</p>
                            <p className={"top-list-up"}>Em pé</p>
                            <p className={"top-list-diff"}>Diferença sentadas</p>
                            <p className={"top-list-diff"}>Diferença em pé</p>
                        </div>

                        <div id={"list"}/>
                    </div>

                    <div className={"chart"}>

                    </div>
                </div>
            </div>
        </main>
    )
}
