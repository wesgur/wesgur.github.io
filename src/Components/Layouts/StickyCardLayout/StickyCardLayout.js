import React from 'react';

import classNames from 'classnames';
import { Container, Col, Row } from 'react-bootstrap';

import { StickyCard, StickyCardSecondary } from '.';

import styles from './styles.module.scss';

const StickyCardLayout = (props) => {
    const [expanded, setLayoutExpanded] = React.useState(false);

    return (
        <section>
            <Container>
                <Row>
                    <Col lg={8}>
                        {props.children}
                    </Col>
                    <Col lg={4}>
                        <div className={classNames(styles.sticky)}>
                            <StickyCard setLayoutExpanded={setLayoutExpanded} />
                            <StickyCardSecondary expanded={expanded} resumeLink={process.env.REACT_APP_RESUME_LINK}/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default StickyCardLayout;
