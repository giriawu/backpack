/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2018 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* @flow */

import React from 'react';
import { BpkList, BpkListItem } from 'bpk-component-list';
import dialogReadme from 'bpk-component-dialog/readme.md';

import Paragraph from './../../components/Paragraph';
import DocsPageBuilder from './../../components/DocsPageBuilder';
import {
  DialogContainer,
  NonDismissibleDialogContainer,
} from './DialogExamples';

const components = [
  {
    id: 'default',
    title: 'Default dialog',
    blurb: [
      <Paragraph>
        The default dialog gives you a blank canvas with a close icon. Tapping
        the scrim or close icon will dismiss it.
      </Paragraph>,
    ],
    examples: [
      <DialogContainer title="Default Dialog.">
        You can put anything you want in here.
      </DialogContainer>,
    ],
  },
  {
    id: 'non-dismissible',
    title: 'Non dismissible',
    blurb: [
      <Paragraph>
        In cases when you want the user to explicitly make or accept the choice,
        the non dissmissible configuration means the dialog has no close icon,
        and tapping the scrim will not dismiss it. Instead, the user must
        interact with the dialog&apos;s content in order to dismiss it.
      </Paragraph>,
    ],
    examples: [<NonDismissibleDialogContainer />],
  },
];

const DialogsPage = () => (
  <DocsPageBuilder
    title="Dialogs"
    blurb={[
      <Paragraph>
        Dialogs inform users about a specific task and may contain critical
        information, or require decisions or acknowledgement. For example:
      </Paragraph>,
      <BpkList>
        <BpkListItem>
          Alert dialogs: urgent interruptions which tell users about a situation
          and require acknowledgement.
        </BpkListItem>
        <BpkListItem>
          Decision dialogs: which require users to confirm or make a choice.
        </BpkListItem>
      </BpkList>,
      <Paragraph>
        Like modals, when triggered, dialogs will emerge from the centre of the
        viewport with a backdrop to indicate their separation from everything
        else. They retain focus until dismissed or a required action has been
        taken. Unlike modals, they are not full screen at mobile size and are
        generally much smaller, containing only concise content. Use dialogs
        sparingly because they are interruptive.
      </Paragraph>,
    ]}
    components={components}
    readme={dialogReadme}
    usageTable={{
      dos: [
        'Use to show an alert, error or decision message.',
        'Use when the user needs to acknowledge the message or make a choice / take an action in order to proceed.',
        "Use when it's important to keep the background content visible in order to maintain context.",
        'Use when the content is small and interactions simple.',
        'Use dialogs sparingly because they are interruptive.',
      ],
      donts: [
        "Don't use for showing larger amounts of content or more complex interactions (use a modal).",
        "Don't use if the content is for information only (use a tooltip or popover).",
      ],
    }}
    sassdocId="dialogs"
  />
);

export default DialogsPage;
