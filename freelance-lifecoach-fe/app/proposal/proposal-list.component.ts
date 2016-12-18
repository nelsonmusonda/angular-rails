import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
    moduleId: module.id,
    selector:'proposal-list',
    templateUrl: 'proposal-list.component.html'
})
export class ProposalListComponent {
    proposalOne: Proposal = new Proposal(15, 'ABC Company', 'http://nelsonmusonda.com', 'Ruby on Rails', 150, 120, 15, 'nelsonmusonda@hotmail.com')
    proposalTwo: Proposal = new Proposal(16, 'backborn Company', 'http://nelsonmusonda.com', 'Ruby on Rails', 150, 120, 15, 'nelsonmusonda@hotmail.com')
    proposalThree: Proposal = new Proposal(17, 'Essanmedia', 'http://nelsonmusonda.com', 'Ruby on Rails', 150, 120, 15, 'nelsonmusonda@hotmail.com')
    proposalFour: Proposal = new Proposal(18, 'coastal coding', 'http://nelsonmusonda.com', 'Ruby on Rails', 150, 120, 15, 'nelsonmusonda@hotmail.com')
}

proposals: Proposal[] = [
    this.proposalOne,
    this.proposalTwo,
    this.proposalThree,
    this.proposalFour
    
]