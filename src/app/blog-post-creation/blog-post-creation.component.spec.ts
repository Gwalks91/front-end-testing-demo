import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BlogPostCreationComponent } from './blog-post-creation.component';
import { FormsModule } from '@angular/forms';

describe('BlogPostCreationComponent', () => {
  let component: BlogPostCreationComponent;
  let fixture: ComponentFixture<BlogPostCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [ BlogPostCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should reset the value of the name when the post button is clicked', ()=> {
    var inputElement = fixture.nativeElement.querySelector("[data-test-selector='postNameField']");
    sendInput(inputElement, "test");
    var postBtn = fixture.nativeElement.querySelector("[data-test-selector='postBtn']");
    postBtn.click();
    expect(component.post.name).toBe("");
  })

  function sendInput(inputElement: HTMLInputElement, text: string) {
    inputElement.value = text;
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    return fixture.whenStable();
  }

  // it('should set the value of the name when name is entered', () =>{
  //   var inputElement = fixture.nativeElement.querySelector("[data-test-selector='postNameField']");
  //   sendInput(inputElement, "test");
  //   expect(component.post.name).toBe("test");
  // })

  // it('should set the value of the massage when a message is entered', () =>{
  //   var inputElement = fixture.nativeElement.querySelector("[data-test-selector='postMessageField']");
  //   sendInput(inputElement, "introPost");
  //   expect(component.post.message).toBe("introPost");
  // })

  // it('should clear the name value when reset is called', () =>{
  //   var inputElement = fixture.nativeElement.querySelector("[data-test-selector='postMessageField']");
  //   component.resetPost();
  //   expect(component.post.name).toBe("");
  //   expect(inputElement.value).toBe("");
  //   expect(inputElement.innerText).toBe("");
  // })

  
});
