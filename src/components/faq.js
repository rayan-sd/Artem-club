import React, { useState } from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';

const Data = [
    {
      question: 'What is an NFT ?',
      answer: 'NFT means Non-Fungible-Token, so a unique digital asset that can take the form of artwork and provide utility to holders, that is probably rare. It means that it‘s one of a kind and the ownership is verified on the blockchain. People can trade, buy, sell these or do other things with them.'
    },
    {
      question: ' What do I need to buy some amazing Wrongs ?',
      answer: 'You need some Ethereum. You can buy it directly from the Metamask Wallet or on Coinbase, Binance, Kraken…'
    },
    {
      question: 'How do I use Metamask Wallet ?',
      answer: 'Metamask is a wallet which you can use to store your crypto assets from tokens to NFTs. Nothing is complicated but you can find all information directly on Metamask Website (https://metamask.io/). You also can download the application or download the Chrome Extension. Having a wallet gives you an Ethereum address (i.e. 0xABCD….1234), this is where your NFT will be stored.'
    },
    {
        question: 'How can I purchase a Wrong ?',
        answer: 'Go to the Mint section on our website, tap on the « mint » button at the top to collect your wallet and mint. The mint page allows you to mint up to 20 Wrong per wallet.'
      },
      {
        question: 'How do I get involved in the Wrong Community ?',
        answer: 'Head over to the Discord, jump in on the conversation and channels and let us know your ideas and suggestions. We are open to any kind of cool ideas. '
      },
      {
        question: 'How can I contact the team ?',
        answer: 'On the bottom of this website, you\'ll find links to our official Twitter and Discord accounts. Feel free to contact the team on any of the featured platforms.'
      },
      {
        question: 'How were the Wrongs generated ?',
        answer: 'Each NFT is constructed the moment you send a transaction but for each Wrong, there is a random number for each attribute, according to the conditions initially set by the team. Give it 48 hours for the reveal after the first mint.'
      },
      {
        question: 'Where can I see the Wrong Artem Club Collection ?',
        answer: 'Each Wrong was procedurally generated from a collection of hand drawn items by our artist, Wara.'
      },
      {
        question: 'Where is my Wrong ?',
        answer: 'The Wrong Artem Club Collection is public and visible on OpenSea. According to our roadmap we also plan to have a digital exhibition.'
      },
      {
        question: 'Where can I buy some merch ?',
        answer: 'After you purchase one (or more !) of these Wrongs, they will appear in your MetaMask Wallet you used to purchase the NFT. You can see your Wrong on OpenSea and sound after launched here, view them from our website'
      },
      {
        question: 'What can I do with my Wrong ?',
        answer: 'It’s not planned on the roadmap 1.0 but maybe for the 2.0, who knows ?'
      },
      {
        question: 'Are Wrong Artem Club a good investment ?',
        answer: 'You are free to do anything with the ones under a non-exclusive licence. '
      },
  ];

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background: transparent;
`;

const Container = styled.div`
  top: 30%;
  padding-top: 100px;
`;

const Wrap = styled.div`
  background: transparent;
  padding: 1rem;
  color: transparent;
  display: flow-root;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  h1 {
    text-align: center;
    padding: 1rem;
    font-size: 2rem;
    font-family: Lato;
    font-style: italic;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    text-align: center;

    color: #000000;
  }
  span {
    margin-right: 1.5rem;
  }
`;

const Dropdown = styled.div`
  background: transparent;
  color: transparent;
  text-align:center;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    width:70%;
    font-size: 1rem;
  }
`;

const FAQ = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ color: '#00FFB9', size: '25px' }}>
      <AccordionSection>
        <Container>
          {Data.map((item, index) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <h1>{item.question}</h1>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <p>{item.answer}</p>
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
  );
};

export default FAQ;