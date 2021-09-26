import { Accordion, Card, Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

function Faq() {
    return (<section className="faq-sec">
        <Container id="hero-sec"  >
            <Row >
                <Col sm={12} className="pb-5">
                    <h1> <b>Frequently asked questions</b></h1>
                </Col>
            </Row>
            <Accordion defaultActiveKey="0">
                <Card className="mb-5">
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            What is Total Market Maker Staking Balance?
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>This is amount of NRGY currently staked into the contract.</Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card className="mb-5">
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            What is Total Market Maker Rewards Generated?
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>This is total amount of rewards generated till date including earned rewards and fees rewards in the contract for all staking holders.</Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card className="mb-5">
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="2">
                            What is Current Week Out of 100?
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body> This will tell the current week which is going on. The total week is 100.</Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card className="mb-5">
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="3">
                            What is Total Market Maker Staking Added for Week?
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                        <Card.Body>This is the total amount of NRGY staked in current week.</Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card className="mb-5">
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="4">
                            What is Available Market Maker Staking for Week?
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="4">
                        <Card.Body>This is the total amount of new NRGY that can be deposited into market maker staking each week. Once the limit is reached, no new coin can be deposited.</Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card className="mb-5">
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="5">
                            What is Last reward date?
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="5">
                        <Card.Body>This signifies the last earned NRGY rewards distribution date.</Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card className="mb-5">
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="6">
                            What is current week limit is not reached?
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="6">
                        <Card.Body>The limit will be rolled over to the next week.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card className="mb-5">
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="7">
                            What is Your staked NRGY ?
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="7">
                        <Card.Body>This is the amount of NRGY you’ve added to the staking contract.</Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card className="mb-5">
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="8">
                            What is Total NRGY Earned ?
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="8">
                        <Card.Body>This is amount of NRGY you’ve earned today.This amount will fluctuate as this week rewards are recalculated real time.If you withdraw any NRGY from the staking contract, you total NRGY will be reduced first before your staking share is affected.</Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card className="mb-5">
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="9">
                            What is NRGY available to claim ?
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="9">
                        <Card.Body> This is the amount of NRGY you can withdraw.This week’s NRGY rewards which is being calculated real time will not be available to claim until it’s finalized at the start of the next week.</Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card className="mb-5">
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="10">
                            What is Rewards earned this week ?
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="10">
                        <Card.Body>This shows your current week rewards calculated in real time which will be fluctuating.These will be available to claimed at the start of the next week after finalization.</Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card className="mb-5">
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="11">
                            What is Your Market Maker Staking Pool Share %?
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="11">
                        <Card.Body>This shows your percentage in the pool.Earned NRGY rewards are considered while calculating pool share.</Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card className="mb-5">
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="12">What is Your NRGY Balance ?

                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="12">
                        <Card.Body>     This is the amount of NRGY who have in your metamask wallet.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card className="mb-5">
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="13">How can I see the most recent audit report ?

                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="13">
                        <Card.Body>    You can see audit report here.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card className="mb-5">
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="14">What happens to coins earned from staking each week ? Do I need to pay to stake those ?
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="14">
                        <Card.Body>A snapshot is programmatically taken of your Earned NRGY balance at a different time each month.Based on this, a reward is generated that’s available to be claimed minus a 7.5 % burn.</Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card className="mb-5">
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="15">How can I find NRGY on Uniswap ?

                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="15">
                        <Card.Body>You can visit <a href="https://info.uniswap.org/token/0xc29acac647c63dbd8618e817d41ea9de69174ae1" target="_blank" rel="noopener noreferrer">here</a>,
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card className="mb-5">
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="16">
                            What is NRGY contract address ?</Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="16">
                        <Card.Body> <a href="https ://etherscan.io/token/0xc29acac647c63dbd8618e817d41ea9de69174ae1" target="_blank" rel="noopener noreferrer"></a> </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card className="mb-5">
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="17">
                            Why do I pay 2 separate transactions to begin staking ?
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="17">
                        <Card.Body>
                            The first transaction is for approving NRGY Market maker Contract By approving, you allow your consent to the contract to spend coin on your behalf.Finally, the last transaction is the stake transaction.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card className="mb-5">
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="18">
                            Do I have full access to my funds ? Elaborate

                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="18">
                        <Card.Body> NRGY platform is designed to be fully decentralized.In other words, there is no central ownership in the contract.Therefore, only you’ve access to your staked NRGY inside the contract which can be unstaked only by you.</Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card className="mb-5">
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="19">
                            How do I use MetaMask ? (Reference a good video)
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="19">
                        <Card.Body> MetaMask is a web extension, which allows you to manage your Ethereum private keys via your web browser.By doing so, it serves as a wallet for Ether and ERC20 tokens, and allows you to visit the distributed web of tomorrow in your browser today.Please visit here to setup your metamask,<a href=" https://metamask.zendesk.com/hc/en-us/articles/360015489531-Getting-Started-With-MetaMask" target="_blank" rel="noopener noreferrer"> Click here</a></Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card className="mb-5">
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="20">
                            Why do I get an error(insufficient funds) ?
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="20">
                        <Card.Body>
                            This error signifies that you don’t have sufficient ether or NRGY tokens in your wallet to process the transaction.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card className="mb-5">
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="21">
                            Why does my MetaMask keep disappearing ? How do I “pin it” to the front of chrome
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="21">
                        <Card.Body>There’s puzzle icon in top right of Chrome.Click the icon, it will expand out a list of extensions installed.Then click the pin icon next to MetaMask and it will add it back to the extension’s toolbar.</Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card className="mb-5">
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="22">
                            What if I want two separate accounts(wallets) to buy NRGY <br />
                            <small>.Eg.Personal and company. How can I do this ? Do I need 2 separate devices ?</small>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="22">
                        <Card.Body>
                            No, you don’t need two separate devices.Instead, you can create any number of accounts in MetaMask.Kindly visit here to create new accounts in MetaMask, <a href="https://metamask.zendesk.com/hc/en-us/articles/360015289452-How-to-Create-Additional-MetaMask-Accounts" target="_blank" rel="noopener noreferrer">Click here</a>

                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card className="mb-5">
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="23">I have some ridiculous high gas fee when I go to stake - what do I do?
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="23">
                        <Card.Body>    The gas fee is higher because of network congestion.You can choose to use a lower gas fees if it’s higher.There’s downside of choosing a lower gas fees, that there may be a probability that it will be pending for a long time. </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card className="mb-5">
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="24">Can I choose gas fees ?
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="24">
                        <Card.Body>
                            <ol>
                                <li>
                                    <p>Confirming an action in the NRGY website brings up the MetaMask window ‘Confirm Transaction’.</p>
                                </li>
                                <li><p>Find ‘Gas Fee’</p></li>
                                <li><p>Click ‘Edit’ next to ‘Gas Fee’ to set a custom Gas Price.</p></li>
                                <li><p>Next, you need to find the average Gas Price at that time on the Ethereum network.</p></li>
                                <li><p>In another tab, visit  <a href="https://ethgasstation.info/" target="_blank" rel="noopener noreferrer">
                                    ETH Gas Station.</a></p></li>
                                <li><p>There you will find the ‘Recommended Gas Prices in Gwei’.</p></li>
                                <li><p>If you’re in a hurry, you can try Gas Price Standard / Std(&#60; 5 minutes) or Fast(&#60; 2 minutes).</p></li>
                                <li><p>Click on the fox logo in your browser to open the MetaMask confirmation window again.</p></li>
                                <li><p>In the Gas Price field, enter the price from ETH Gas Station.</p></li>
                                <li> <p>Click ‘SAVE’ to save your custom gas fee.</p> </li>
                                <li>
                                    <p>Click ‘CONFIRM’ to submit your transaction.</p>
                                </li>
                                <li><p>That’s it!</p></li>
                            </ol>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card className="mb-5">
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="25">
                            I keep trying to stake but it won’t go through.How do I cancel the failed pending transactions ?
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="25">
                        <Card.Body>    Please visit here to know the steps to cancel a pending transaction,<a href=" https://metamask.zendesk.com/hc/en-us/articles/360015489251-How-to-Speed-Up-or-Cancel-a-Pending-Transaction#:~:text=To%20cancel%20the%20transaction%2C%20simply,refer%20to%20Eth%20Gas%20Station." target="_blank" rel="noopener noreferrer">Click here</a></Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </Container >
    </section >
    );
}

export default Faq;










