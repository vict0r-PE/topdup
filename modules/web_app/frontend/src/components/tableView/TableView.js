import React from "react";
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

export default function TableView ({
}) {
    return (
        <div className="container">
            <div className="row">
                <div className="row">
                    <Table bordered hover responsive>
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Bai Viet</th>
                                <th>Ten Mien</th>
                                <th>Ngay Vao He thong</th>
                                <th>Sim Scrore</th>
                                <th>DupComp</th>
                                <th colspan="2">Bieu Quyet Bai Goc</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td rowSpan="2">1</td>
                                <td>bai 1</td>
                                <td>abc@aa.com</td>
                                <td>11/11/20</td>
                                <td rowSpan="2">0.1</td>
                                <td rowSpan="2">
                                    <Button variant="outline-primary">So Sanh</Button>{' '}
                                </td>
                                <td>30</td>
                                <td>5</td>
                            </tr>

                            <tr>
                                <td>bai 2</td>
                                <td>aaaa@bb.com</td>
                                <td>12/1/19</td>
                                <td>15</td>
                                <td>10</td>
                            </tr>
                            
                        </tbody>
                    </Table>
                </div>
                <div className="container">
                    <Button variant="primary" >Xem Them...</Button>{' '}
                </div>
                
            </div>
        </div>
        
    )
}
    