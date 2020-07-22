import React from "react";

import { Item, Label, Button, Modal } from "semantic-ui-react";

export const JobCard = ({ jobList }) => {
  console.log(jobList);
  return (
    <div>
      {jobList.map((job) => {
        return (
          <Item.Group key={job.id}>
            <Item>
              <Item.Image size="tiny" src={job.company_logo} />
              <Item.Content>
                <Item.Header>{job.title}</Item.Header>
                <Item.Extra>
                  <Label
                    icon="building outline"
                    content={job.company}
                    as="a"
                    href={job.company_url}
                  />
                  <Label icon="tag" content={job.type} />
                  <Label icon="globe" content={job.location} />
                </Item.Extra>
                <Item.Description>
                  <p>description need to be trim</p>
                </Item.Description>

                <Item.Extra>
                  <Modal
                    trigger={
                      <Button primary floated="left">
                        Apply for this job
                      </Button>
                    }
                  >
                    <Modal.Header>How to apply</Modal.Header>
                    <Modal.Content>
                      <Modal.Description>
                        <p>
                          If this sounds like you - what are you waiting for??
                        </p>
                      </Modal.Description>
                    </Modal.Content>
                  </Modal>
                </Item.Extra>
              </Item.Content>
            </Item>
          </Item.Group>
        );
      })}
    </div>
  );
};
