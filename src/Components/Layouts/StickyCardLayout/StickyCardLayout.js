import React from 'react';

import classNames from 'classnames';
import { Container, Col, Row } from 'react-bootstrap';

import { StickyCard, StickyCardSecondary } from '.';

import styles from './styles.module.scss';

const RESUME_DOWNLOAD_LINK = "https://www.dropbox.com/s/f4kinqwerf9soej/Resume.pdf?dl=1";

const StickyCardLayout = (props) => {
    const [expanded, setLayoutExpanded] = React.useState(false);

    return (
        <section className={classNames(styles["main-content"])}>
            <Container>
                <Row>
                    <Col lg={8}>
                        {props.children}
                    </Col>
                    <Col lg={4}>
                        <StickyCard setLayoutExpanded={setLayoutExpanded} />
                        <StickyCardSecondary expanded={expanded} resumeLink={RESUME_DOWNLOAD_LINK}/>
                    </Col>                            
                </Row>
            </Container>
        </section>
    );
};

export default StickyCardLayout;